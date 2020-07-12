import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { Container, Footer, Spinner } from 'native-base';
import { ApplicationStyles, Colors, Icons, Metrics } from '../../../theme';
import styles from './style/HomeScreenStyle';
import CustomHeader from '../../../components/CustomHeader';
import colors from '../../../theme/Colors';
import { connect } from 'react-redux';
import { getVideoListRequest } from '../../../redux/actions/Auth';
import Global from '../../../configs/Global';
import Carousel from 'react-native-snap-carousel';
import GridComponent from './GridComponent';
import ListComponent from './ListComponent';
import { SafeAreaView } from 'react-navigation';
import { FooterComponent } from './FooterComponent';
const { width } = Dimensions.get('window');

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerTabSelected: 'grid',
            isLoading: false,
            movieDataList: [],
            counter: 10,
            isBottomLoader: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true }, () => this.fetchMovieDataByPagination())
    }

    componentDidUpdate(prevProps) {
        const { auth } = this.props;
        if (prevProps?.auth?.videoLoader && !auth?.videoLoader) this.handleResponse();
    };

    handleResponse = () => {
        const { auth: { videoData, error } } = this.props;
        if (videoData && error === null) {
            this.setState({
                isLoading: false, isBottomLoader: false, movieDataList: videoData?.feed?.results
            })
        } else if (error !== null) this.setState({ isLoading: false, isBottomLoader: false }, () => Global.customToast(error, 'danger'));
    };

    fetchMovieDataByPagination = () => {
        let { counter } = this.state;
        const { fetchMovieData } = this.props;
        fetchMovieData(counter)
    }

    updateFooterButtonState = (value) => {
        this.setState({ footerTabSelected: value })
    }

    renderFlatlist = () => {
        const { movieDataList } = this.state
        const { auth } = this.props;
        return (
            <FlatList
                ref={ref => this.flatListRef = ref}
                showsVerticalScrollIndicator={false}
                data={movieDataList}
                removeClippedSubviews={false}
                contentContainerStyle={styles.flatListRefContainer}
                numColumns={1}
                updateCellsBatchingPeriod={1}
                ListFooterComponent={() => this.renderBottomSpinner()}
                renderItem={({ item }) => <ListComponent item={item} />}
                onEndReached={({ distanceFromEnd }) => {
                    let { counter } = this.state;
                    if (distanceFromEnd >= 0.2 && !auth?.videoLoader) this.setState({ isBottomLoader: true, counter: counter + 10 }, () => this.fetchMovieDataByPagination())
                }}
                onEndReachedThreshold={0.5}
                extraData={movieDataList}
                keyExtractor={(item, index) => String(index)}
            />
        )
    }

    renderSpinner = () => {
        return (
            <View style={styles.spinnerCenterView}>
                <Spinner color={colors.matBlack} />
            </View>
        )
    }

    renderBottomSpinner = () => (
        this.state.isBottomLoader && <Spinner color={colors.matBlack} />
    )


    renderGrid = () => {
        const { movieDataList } = this.state;
        const { auth } = this.props;

        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={movieDataList}
                containerCustomStyle={styles.courselStyle}
                renderItem={({ item }) => <GridComponent item={item} />}
                sliderWidth={width}
                inactiveSlideScale={0.9}
                itemWidth={width - 100}
                layout={'default'}
                bounces={true}
                firstItem={1}
                enableMomentum
                enableSnap
                onEndReached={() => {
                    let { counter } = this.state;
                    if (!auth?.videoLoader) this.setState({ isBottomLoader: true, counter: counter + 10 }, () => this.fetchMovieDataByPagination())
                }}
            />
        )
    }

    render() {
        const { isLoading, footerTabSelected } = this.state
        return (
            <SafeAreaView style={ApplicationStyles.screen.safeAreaViewContainerDark} forceInset={{ bottom: 'never' }}>
                <StatusBar backgroundColor={Colors.matBlack} barStyle={'light-content'} />
                <CustomHeader title='Top Films' />
                <Container style={styles.containerStyle}>
                    {isLoading ? this.renderSpinner() :
                        footerTabSelected === 'list' ? this.renderFlatlist() :
                            this.renderGrid()}
                </Container>
                <FooterComponent updateFooterButtonState={(value) => this.updateFooterButtonState(value)} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    fetchMovieData: (data) => dispatch(getVideoListRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
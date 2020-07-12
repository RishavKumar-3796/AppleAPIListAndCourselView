# React Native Testing App

## Getting started
1. Clone this repository
2. Run `npm install` , all required components will be installed automatically

    ### iOS
      
    1. Run `cd /ios && pod install`
    2. Launch in iOS simulator `npm run ios`
    3. Start XCode and open generated `appName.xcworkspace`
    
    ### Android
    1. Launch in android simulator or device `npm run android`


Movie app:
● IT contains : 
○ Splash screen

○ Login screen

○ Movie list in Carousel view. ○ Movie list in FlatList.


Splash screen:
● Splash screen with image and background colour.

Login screen:

● Login screen with some greeting texts.

● Email address field, required a valid email address.

● Password field, required a Valid password with minimum six characters.

● If user taps on login button with invalid fields, application prompt with alert and
appropriate message will be display.

● If user logged in successful, user will be navigate to application dashboard.

● If user entered invalid email and/or password, application prompt with alert and
appropriate message will be display.


Carousel screen:
● Carousel screen with title.

● Horizontal carouse view.

● When user launch this screen, we need to call API to get the data for movies
Carousel view.

● Carousel view should be able user to swipe left/right, and during user swiping,
the item which one when closing center should have size smooth change(be longer), and when leaving center should have size smooth change(be shorter). And movie name and genres information will be appear/disappear smoothly as well


Listing screen:

● Listing screen with title.

● Vertical FlatList view.

● When user launch this screen, we need to call API to get the data for movies
FlatList view.

● display [N] Number of records, which is lazily loads and need to
display.


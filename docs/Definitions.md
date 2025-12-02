# Definitions

With new features and designs being implemented every week, here is the Ingredifind's Definitions that are used in discussions and tasks. This page aims to clarify confusion on which pages are being referenced.

Also, when possible it is important to use these term definitions in varialbes, method names, and components.

_If you feel there are more that can be added, create a new branch and update this file._

## Term Definitions

**RestaurantOverview:** means the page that shows all information about a restaurant (e.g. name, hours, address, etc.)

**NearbyRestaurants:** means the page that shows all restaurants for specific location.

**MenuOverview:** means an overview page of all Menus for that restaurant.

**ActiveMenuOverview:** means an overview page of all Menus active for that restaurant.

**Menu:** means the page that contains all the details about one specific Menu.
_Plural of `Menu` is `Menus`._

**MenuDetails:** means the page that contains all non-dish related information about one specific Menu.

**DishOverview:** means the page that contains all Dishes for that restaurant.

## Frontend

#### Menu Overview

_Refers to the overview of all menus for a given restaurant._

```
Component: menus-overview
Slug: /restaurant/menus
```

#### Menu Details

_Refers to the non-dish related details of a menu. Menu details is about the menu name, description, hours, activation setting, etc._

```
Component: menu-about
Slug: /restaurant/menu/::MENUID/about
```

#### Menu Content

_Refers to the content/dish-related details of a menu. This is where we can see and modify all the dishes and menu sections of a menu._

```
Component: create-menu
Slug: /restaurant/menu/::MENUID
```

#### Dishes Page

\_Refers to the page that shows all the dishes of a restaurant which can be located in the dishes component. This is where users can create new dishes, edit dishes, and permanently delete them.\_\_

```
Component: dishes
Slug: /restaurant/dishes
```

#### View-Menu _depreciated_

_Refers to the component that shows the restaurant’s menus to their customers. This is found in the main app components._

```
Component: view-menu
Slug: /restaurant/::restaurantID/menu
```

#### Customer-menu

_Refers to the V2 of `view-menu` and is a separate app from the main app. It has the same functionality as `view-menu` but it is not in the same app._

```
Component: fe_project/project/customer-menu
Slug: /restaurant/::restaurantID/menu/::menuID
```

## Mobile

The [Mobile App](https://github.com/Ingredifind/ingredifind-mobile-application) is divided into a 2 main features/sections. This is how we reference them:

**Search related UX: (SRUX)** _Refers to all pages for finding a restaurant or searching for something specific._

**Dining related UX: (DRUX)** _Refers to features that are available when a user is at a restaurant._

The the 4 main pages in the app are:

```
Hompage (SRUX): Finds restaurants given a specific location.
QR Scanner (DRUX): Scan IGFD QR codes found in restaurants.
Search (SRUX): Search for restaurant/dish/cuisine/etc.
Map (SRUX): Map view of Homepage.
Account: View and modify account info.
```

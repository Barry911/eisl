<!doctype html>
<html lang="{{ config('app.locale') }}" ng-app="kittron" class="no-js"  ng-strict-di ng-controller="MainCtrl">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Cinzel:900|Fira+Mono|Pavanam|Swanky+and+Moo+Moo" rel="stylesheet">
        <link href="{{asset('css/all.css')}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/vendor.css')}}" rel="stylesheet" type="text/css">
        <title ng-cloak ng-bind-template="$title"></title>
    </head>
    <body>
    <div ng-cloak class="menu show_menu" ng-show="showMenu">
        <span class="md-padding" layout="row" layout-align="start end">
        <span>
		<a id="logo-container" ng-click="goto('home')" class="brand-logo left" style="margin-top:5px; ">
        <img src="kittron_logo.png"/>
    </a>
	</span>
        <span flex>
	</span>
        <span>
		<md-button class="md-icon-button" ng-click="menuToggle()" aria-label="close">
        <md-icon class="material-icons" ng-bind="'close'"></md-icon>
     </md-button>
	</span>
        </span>
        <span layout="row" layout-align="center center">
	<md-button class="md-primary" ng-click="goto('login')">
	<md-icon class="material-icons" ng-bind="'exit_to_app'"></md-icon>
	Login
	</md-button>
	<md-button class="md-primary" ng-click="goto('register.basic')">
	<md-icon class="material-icons" ng-bind="'create'"></md-icon>
	Sign up
	</md-button>

</span>

        <span layout="column">
<md-divider></md-divider>
<div>
<md-content layout-align="center center">
<md-list>
<md-subheader>Services</md-subheader>
  <md-list-item ng-click="goto('hotel')">
    <div class="md-list-item-text">
      <h3>Hotels</h3>
    </div>
  </md-list-item>
  <md-list-item ng-click="goto('event_center')">
    <div class="md-list-item-text">
      <h3>Event Centers</h3>
    </div>
  </md-list-item>
  <md-list-item ng-click="goto('event_planners')">
    <div class="md-list-item-text">
      <h3>Event Planners</h3>
    </div>
  </md-list-item>
  <md-list-item ng-click="goto('vendor')">
    <div class="md-list-item-text">
      <h3>Vendors</h3>
    </div>
  </md-list-item>
  <md-list-item ng-click="goto('vendor')">
    <div class="md-list-item-text">
      <h3>Tickets</h3>
    </div>
  </md-list-item>
</md-list>
</md-content>
</div>
</span>

    </div>
    <nav class="nav light-blue lighten-1" role="navigation" layout="row" layout-align=" start space-between">
        <a id="logo-container" ui-sref="home" class="brand-logo left" style="margin-top:5px; ">
            <img src="kittron_logo.png" class="hide-on-med-and-down" hide-sm/>
            <img src="k_logo.png" class="hide-on-sm-and-down" hide-md hide-gt-md width="25px" height="25px"/>
        </a>
        <span flex>

    </span>
        <div class="nav-wrapper container" ng-show="!showSearch">
            <ul class="left hide-on-med-and-down" hide-sm>
                <li><a ui-sref="how_kittron_works">How Kittron Works</a></li>
                <li><a ui-sref="tickets">Tickets</a></li>
                <li><md-menu><a ng-click="$mdMenu.open()">Account <md-icon class="material-icons white600">account_circle</md-icon></a>
                        <md-menu-content width="3">
                            <md-menu-item>
                                <md-button ui-sref="login">
                                    <md-icon class="material-icons" ng-bind="'exit_to_app'"></md-icon>
                                    Log in
                                </md-button>
                            </md-menu-item>
                            <md-menu-item>
                                <md-button ui-sref="register.basic">
                                    <md-icon class="material-icons" ng-bind="'create'"></md-icon>
                                    Sign Up
                                </md-button>
                            </md-menu-item>
                        </md-menu-content>
                    </md-menu>

                </li>
            </ul>
            <span flex></span>

        </div>
        <div class="md-toolbar-tools nav-wrappr contaner show_search" ng-show="showSearch">
            <span flex>
             </span>
            <md-button class="md-icon-button" aria-label="Search" ng-click="showSearch = !showSearch">
                <md-icon class="material-icons white600" ng-bind="'close'"></md-icon>
            </md-button>

            <md-input-container flex="80" class="ker">
                <label>&nbsp;</label>
                <input ng-model="search.who" placeholder="search here">
            </md-input-container>

            <md-button class="md-icon-button " aria-label="Search" ng-click="">
                <md-icon class="material-icons white600" ng-bind="'search'"></md-icon>
            </md-button>
        </div>
        <span flex>

    </span>
        <div>
	    <span  ng-hide="showSearch" style="">
				 <md-button class="md-icon-button" aria-label="Search" ng-click="showSearch = !showSearch">
		        <md-icon class="material-icons white600">search</md-icon>
		      </md-button>
	     </span>
        <span hide-gt-md hide-md>
            <md-button class="md-icon-button" hide-md aria-label="Menu" ng-click="menuToggle()">
                 <md-icon class="material-icons white600"  ng-bind="'menu'"></md-icon>
            </md-button>
        </span>
        </div>
    </nav>
    <div>
     <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div ui-view class="kr-view"></div>
    </div>
    <script src="{{asset('js/vendor.js')}}"></script>
    <script src="{{asset('js/all.js')}}"></script>
    </body>
</html>

## 1.0.10 (13 June 2011)

  - Updated to latest jqueyr-ujs with bug fixes

## 1.0.9 (25 May 2011)

  - Merged with new rails repo (3.1 fix)

## 1.0.8 (25 May 2011)

  - Updated to latest jquery-ujs with `[disabled][required]` fix

## 1.0.7 (21 May 2011)

  - Fix assert_select_jquery's bad call to unescape_rjs

## 1.0.6 (21 May 2011)

  - Updated to latest jquery-ujs with `data-params` support

## 1.0.5 (17 May 2011)

  - Updated to latest jquery-ujs
  - Remove old rails.js in Rails 3.0 generator

## 1.0.4 (17 May 2011)

  - Fix exception in Rails 3.0 generator

## 1.0.3 (17 May 2011)

  - Update to jQuery 1.6.1
  - Remove useless --version generator option

## 1.0.2 (12 May 2011)

  - Fix Rails 3.0 now that rails.js is named jquery_ujs.js

## 1.0.1 (10 May 2011)

  - Stop downloading rails.js from GitHub
  - Vendor jQuery UI for those who want it
  - Fix assert_select_jquery now that Rails 3.1 has no RJS at all
  - Fix rails dependency to just be railties

## 1.0.rc (3 May 2011)

  - Rails 3.1 asset pipeline edition
  - Removes generators and railties
  - Just provides jquery.js and jquery_ujs.js
  - Still compatible with Rails 3.0 via the old generator code

## 0.2.7 (5 February 2011)

  - Updated to use jQuery 1.5 by default

## 0.2.6 (1 December 2010)

Feature:

  - Updated to use jQuery 1.4.4 by default

## 0.2.5 (4 November 2010)

Bugfix:

  - Download JQuery Rails UJS via HTTPS since Github is now HTTPS only

## 0.2.4 (16 October 2010)

Features:

  - Updated to use the new jQuery 1.4.3 by default, with the IE .live() bug fixed
  - Always download the newest 1.x release of jQuery UI
  - Try to install unknown versions of jQuery, with fallback to the default
  - Print informative messages in the correct Generator style

## 0.2.3 (13 October 2010)

Features:

  - Support Edge Rails 3.1 by depending on Rails ~>3.0
  - Add Sam Ruby's assert_select_jquery test helper method
  - Use jquery.min only in production (and not in the test env)

## 0.2.2 (8 October 2010)

Feature:

  - Depend on Rails >=3.0 && <4.0 for edge Rails compatibility

## 0.2.1 (2 October 2010)

Bugfix:

  - Default to jQuery 1.4.1 as recommended by jQuery-ujs
    due to a bug in 1.4.2 (http://jsbin.com/uboxu3/7/)

## 0.2 (2 October 2010)

Features:

  - Allow specifying which version of jQuery to install
  - Add generator tests (thanks, Louis T.)
  - Automatically use non-minified JS in development mode

## 0.1.3 (16 September 2010)

Bugfix:

  - allow javascript :defaults tag to be overridden

## 0.1.2 (18 August 2010)

Bugfix:

  - check for jQueryUI in the right place

## 0.1.1 (16 August 2010)

Bugfix:

  - fix generator by resolving namespace conflict between Jquery::Rails and ::Rails

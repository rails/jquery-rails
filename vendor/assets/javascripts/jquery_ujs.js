




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-ujs/src/rails.js at master · rails/jquery-ujs</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="rails/jquery-ujs" name="twitter:title" /><meta content="jquery-ujs - Ruby on Rails unobtrusive scripting adapter for jQuery" name="twitter:description" /><meta content="https://0.gravatar.com/avatar/30f39a09e233e8369dddf6feb4be0308?d=https%3A%2F%2Fidenticons.github.com%2Ff42a37d114a480b6b57b60ea9a14a9d2.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://0.gravatar.com/avatar/30f39a09e233e8369dddf6feb4be0308?d=https%3A%2F%2Fidenticons.github.com%2Ff42a37d114a480b6b57b60ea9a14a9d2.png&amp;r=x&amp;s=400" property="og:image" /><meta content="rails/jquery-ujs" property="og:title" /><meta content="https://github.com/rails/jquery-ujs" property="og:url" /><meta content="jquery-ujs - Ruby on Rails unobtrusive scripting adapter for jQuery" property="og:description" />

    <meta name="hostname" content="github-fe132-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87d8860372) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="B649029A:0716:1F56589:52F3933E" name="octolytics-dimension-request_id" /><meta content="1243626" name="octolytics-actor-id" /><meta content="aravindgd" name="octolytics-actor-login" /><meta content="94fda9dadfaa95f54063819ccad7c15ed7de25eeb29a6109d6ba7c6ec9d8afd6" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="sqRhSwDiygO/KGCudJNY84zZdhMwWnEqVMAOKRAcJDs=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-c8eaece92b2ba4da8cdfd619fae679b5161d6b98.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-7f0d7b48b3c00afffc09e3e222de589a9adf9afa.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8d62aa911c75d1d60662859d52c3cf1232675e6.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-6b7bd560c0991d6b250d7e58de8a56752605497f.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="78251706371336786228143a8932e87f">

        <link data-pjax-transient rel='permalink' href='/rails/jquery-ujs/blob/737273923b67a1895a74abcaaa94d4289b0340e3/src/rails.js'>

  <meta name="description" content="jquery-ujs - Ruby on Rails unobtrusive scripting adapter for jQuery" />

  <meta content="4223" name="octolytics-dimension-user_id" /><meta content="rails" name="octolytics-dimension-user_login" /><meta content="494159" name="octolytics-dimension-repository_id" /><meta content="rails/jquery-ujs" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="494159" name="octolytics-dimension-repository_network_root_id" /><meta content="rails/jquery-ujs" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/rails/jquery-ujs/commits/master.atom" rel="alternate" title="Recent Commits to jquery-ujs:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="aravindgd"
      data-repo="rails/jquery-ujs"
      data-branch="master"
      data-sha="99d7191870269ccae35fe26b9afb7a040d1d456a"
  >

    <input type="hidden" name="nwo" value="rails/jquery-ujs" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/aravindgd" class="name">
        <img alt="aravindgd" height="20" src="https://2.gravatar.com/avatar/32abdce708599cc413ec137361546dc9?d=https%3A%2F%2Fidenticons.github.com%2F371a18d92fd81aa422f0cd4e01ca04f9.png&amp;r=x&amp;s=140" width="20" /> aravindgd
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped downwards" title="Create new..." aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped downwards"
        aria-label="Account settings "
        title="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="rails/jquery-ujs">This repository</span>
    </li>
      <li>
        <a href="/rails/jquery-ujs/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="sqRhSwDiygO/KGCudJNY84zZdhMwWnEqVMAOKRAcJDs=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="494159" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/rails/jquery-ujs/watchers">
        52
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/rails/jquery-ujs/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/rails/jquery-ujs/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/rails/jquery-ujs/stargazers">
        1,914
      </a>
  </div>

  </li>


        <li>
          <a href="/rails/jquery-ujs/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/rails/jquery-ujs/network" class="social-count">363</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/rails" class="url fn" itemprop="url" rel="author"><span itemprop="title">rails</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/rails/jquery-ujs" class="js-current-repository js-repo-home-link">jquery-ujs</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/rails/jquery-ujs" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /rails/jquery-ujs">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/rails/jquery-ujs/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /rails/jquery-ujs/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>42</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/rails/jquery-ujs/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /rails/jquery-ujs/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>14</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/rails/jquery-ujs/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /rails/jquery-ujs/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/rails/jquery-ujs/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /rails/jquery-ujs/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/rails/jquery-ujs/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /rails/jquery-ujs/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/rails/jquery-ujs/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /rails/jquery-ujs/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/rails/jquery-ujs.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/rails/jquery-ujs.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:rails/jquery-ujs.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:rails/jquery-ujs.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/rails/jquery-ujs" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/rails/jquery-ujs" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/rails/jquery-ujs/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:5c32b8d20dba43e56b819373ee4b8841 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/rails/jquery-ujs/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rails/jquery-ujs/blob/data-disable/src/rails.js"
                 data-name="data-disable"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="data-disable">data-disable</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rails/jquery-ujs/blob/fixes/src/rails.js"
                 data-name="fixes"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="fixes">fixes</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rails/jquery-ujs/blob/jquery_style_callbacks/src/rails.js"
                 data-name="jquery_style_callbacks"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="jquery_style_callbacks">jquery_style_callbacks</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rails/jquery-ujs/blob/master/src/rails.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rails/jquery-ujs/blob/v1.4/src/rails.js"
                 data-name="v1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.4">v1.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rails/jquery-ujs" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery-ujs</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rails/jquery-ujs/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">rails.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/rails.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/79b1b001d5ff186c9bd02e7487aa4142?d=https%3A%2F%2Fidenticons.github.com%2F00d021a70eb568ae3a6778add4fed2e9.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/derekprior" rel="author">derekprior</a></span>
    <time class="js-relative-date" datetime="2013-11-11T07:14:50-08:00" title="2013-11-11 07:14:50">November 11, 2013</time>
    <div class="commit-title">
        <a href="/rails/jquery-ujs/commit/c7dcc344eefcd9a646fe570f00fec73078ecb6c4" class="message" data-pjax="true" title="Expose CSRF Token refresh as a function

Refreshing CSRF tokens ensures that forms do not contain cached tokens.
This is currently done once, when jquery-ujs is loaded. If a cached form
is later loaded onto the page (say via a remote form for &#39;load more&#39;),
the CSRF token is not udated.

This change exposes the CSRF token refreshing code at
`$.rails.refreshCSRFTokens` so it can be called at will without developers
having to re-implement the function.">Expose CSRF Token refresh as a function</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>43</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="JangoSteve" href="/rails/jquery-ujs/commits/master/src/rails.js?author=JangoSteve"><img height="20" src="https://2.gravatar.com/avatar/ca46a3d7ca39aae7b2b27526d0ad64f0?d=https%3A%2F%2Fidenticons.github.com%2F12a72b2c150dad5f17d7df97fe9fe960.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="neerajdotname" href="/rails/jquery-ujs/commits/master/src/rails.js?author=neerajdotname"><img height="20" src="https://2.gravatar.com/avatar/934f858e451cf9b771996b2940cd696b?d=https%3A%2F%2Fidenticons.github.com%2F985e9a46e10005356bbaf194249f6856.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mislav" href="/rails/jquery-ujs/commits/master/src/rails.js?author=mislav"><img height="20" src="https://0.gravatar.com/avatar/8f93a872e399bc1353cc8d4e791d5401?d=https%3A%2F%2Fidenticons.github.com%2F7ce3284b743aefde80ffd9aec500e085.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="stevestmartin" href="/rails/jquery-ujs/commits/master/src/rails.js?author=stevestmartin"><img height="20" src="https://0.gravatar.com/avatar/27705c8168daa5136abc3bfaaa76ae88?d=https%3A%2F%2Fidenticons.github.com%2Fe21cc1d36a6a93d33f9b72adfea44b8f.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="qhoxie" href="/rails/jquery-ujs/commits/master/src/rails.js?author=qhoxie"><img height="20" src="https://0.gravatar.com/avatar/b76e0cddb0326224a411a8fbcaea7d9d?d=https%3A%2F%2Fidenticons.github.com%2F9565d975e952ec21ae8131e05130036c.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="scottgonzalez" href="/rails/jquery-ujs/commits/master/src/rails.js?author=scottgonzalez"><img height="20" src="https://1.gravatar.com/avatar/35da631954825179143c86fa42a10954?d=https%3A%2F%2Fidenticons.github.com%2Fb5022b8fa3fa419ab039a0f8d70866a2.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="lucasmazza" href="/rails/jquery-ujs/commits/master/src/rails.js?author=lucasmazza"><img height="20" src="https://0.gravatar.com/avatar/5a90a67fa1a92e6a4b605cfd8da5e375?d=https%3A%2F%2Fidenticons.github.com%2F742a53737ba9579f5fdab3038fe4b6b2.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sskirby" href="/rails/jquery-ujs/commits/master/src/rails.js?author=sskirby"><img height="20" src="https://2.gravatar.com/avatar/4d4c378e3a10e2d01a636a33c359734c?d=https%3A%2F%2Fidenticons.github.com%2F6f3e24662182e125fc58299809ee6a67.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="RStankov" href="/rails/jquery-ujs/commits/master/src/rails.js?author=RStankov"><img height="20" src="https://0.gravatar.com/avatar/7a0e72a6f55811246bb5d9a946fd2e49?d=https%3A%2F%2Fidenticons.github.com%2F9365ae980268ef00988a8048fa732226.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="brianmario" href="/rails/jquery-ujs/commits/master/src/rails.js?author=brianmario"><img height="20" src="https://0.gravatar.com/avatar/c9f60c0cb1d941fa8e93bbfcb907c27e?d=https%3A%2F%2Fidenticons.github.com%2F20aeb8a8621709e3ac91e891e7c62f8f.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="lucasuyezu" href="/rails/jquery-ujs/commits/master/src/rails.js?author=lucasuyezu"><img height="20" src="https://0.gravatar.com/avatar/864ae2178a21699972a64f5262b62b00?d=https%3A%2F%2Fidenticons.github.com%2Fcecd01c1eb84f4f0f2b48e121c8a62f5.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="escobera" href="/rails/jquery-ujs/commits/master/src/rails.js?author=escobera"><img height="20" src="https://0.gravatar.com/avatar/fca9f7376b4527353138bf920817d59e?d=https%3A%2F%2Fidenticons.github.com%2F4042483f5c2c4015e2a6abd47aa76b6f.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="foca" href="/rails/jquery-ujs/commits/master/src/rails.js?author=foca"><img height="20" src="https://1.gravatar.com/avatar/d0ca2bf32bda9e9ea8c4473ffc3aaa0d?d=https%3A%2F%2Fidenticons.github.com%2Ffccb60fb512d13df5083790d64c4d5dd.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="stefanpenner" href="/rails/jquery-ujs/commits/master/src/rails.js?author=stefanpenner"><img height="20" src="https://2.gravatar.com/avatar/8ccebbc3d28f903d5c214efd3447ac71?d=https%3A%2F%2Fidenticons.github.com%2Ff52378e14237225a6f6c7d802dc6abbd.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="josevalim" href="/rails/jquery-ujs/commits/master/src/rails.js?author=josevalim"><img height="20" src="https://1.gravatar.com/avatar/e837f6b7fd146ab16ed3d663476c063e?d=https%3A%2F%2Fidenticons.github.com%2Fe20b21ae6508f22fc189c60a0880d0b8.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="webmat" href="/rails/jquery-ujs/commits/master/src/rails.js?author=webmat"><img height="20" src="https://0.gravatar.com/avatar/a908bf6680c4fa7279dd85d5012f7ed8?d=https%3A%2F%2Fidenticons.github.com%2F46a558d97954d0692411c861cf78ef79.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="miry" href="/rails/jquery-ujs/commits/master/src/rails.js?author=miry"><img height="20" src="https://0.gravatar.com/avatar/0e556a2be10ff4f32bb9e6f9a2c00cfa?d=https%3A%2F%2Fidenticons.github.com%2F0a03d5e4473c0629cfb20c5c31543b06.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="martinlissmyr" href="/rails/jquery-ujs/commits/master/src/rails.js?author=martinlissmyr"><img height="20" src="https://2.gravatar.com/avatar/9dbbb26b19283ce2dd0224d08731686c?d=https%3A%2F%2Fidenticons.github.com%2Fffb14ff15765b6c052427840000e8f15.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="otaviomedeiros" href="/rails/jquery-ujs/commits/master/src/rails.js?author=otaviomedeiros"><img height="20" src="https://1.gravatar.com/avatar/75d17092335053d0df1f43f7c8ac3293?d=https%3A%2F%2Fidenticons.github.com%2Fa025095fa84f72622a158365214b1d96.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ronalchn" href="/rails/jquery-ujs/commits/master/src/rails.js?author=ronalchn"><img height="20" src="https://2.gravatar.com/avatar/3d3a40b43d638725a348384e70d86285?d=https%3A%2F%2Fidenticons.github.com%2Fbe6889aee890fded6eda5cce18ee95c3.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="lailsonbm" href="/rails/jquery-ujs/commits/master/src/rails.js?author=lailsonbm"><img height="20" src="https://0.gravatar.com/avatar/b1409a8715cc91a1e9915d74f56952ff?d=https%3A%2F%2Fidenticons.github.com%2F27d68e41b3564317a4730a912ec8eb7b.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="amatsuda" href="/rails/jquery-ujs/commits/master/src/rails.js?author=amatsuda"><img height="20" src="https://0.gravatar.com/avatar/76a777ff80f30bd3b390e275cce625bc?d=https%3A%2F%2Fidenticons.github.com%2F76cac4685e3749728f9c04bd3a86221f.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="khelll" href="/rails/jquery-ujs/commits/master/src/rails.js?author=khelll"><img height="20" src="https://0.gravatar.com/avatar/c6b63e9914149409d4b007918649ae65?d=https%3A%2F%2Fidenticons.github.com%2F31929d25d1c8e249e562153efe1dc65b.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="spastorino" href="/rails/jquery-ujs/commits/master/src/rails.js?author=spastorino"><img height="20" src="https://2.gravatar.com/avatar/d04d064616ae7fd752fdcb8daa5abdd6?d=https%3A%2F%2Fidenticons.github.com%2F960fc72b306e2c9879dbeaa4f765dad2.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="akre54" href="/rails/jquery-ujs/commits/master/src/rails.js?author=akre54"><img height="20" src="https://1.gravatar.com/avatar/cdebe55961ee3852f4bb72c0d03e0df5?d=https%3A%2F%2Fidenticons.github.com%2Fe9cd34600c54a2dfcdbf441ea4c3be5a.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jherdman" href="/rails/jquery-ujs/commits/master/src/rails.js?author=jherdman"><img height="20" src="https://2.gravatar.com/avatar/afd42fff23928a20972d60744fcdca4a?d=https%3A%2F%2Fidenticons.github.com%2F63bfd6e8f26d1d3537f4c5038264ef36.png&amp;r=x&amp;s=140" width="20" /></a>

      <a href="#blob_contributors_box" rel="facebox" class="others-text">and others.</a>

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/ca46a3d7ca39aae7b2b27526d0ad64f0?d=https%3A%2F%2Fidenticons.github.com%2F12a72b2c150dad5f17d7df97fe9fe960.png&amp;r=x&amp;s=140" width="24" />
            <a href="/JangoSteve">JangoSteve</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/934f858e451cf9b771996b2940cd696b?d=https%3A%2F%2Fidenticons.github.com%2F985e9a46e10005356bbaf194249f6856.png&amp;r=x&amp;s=140" width="24" />
            <a href="/neerajdotname">neerajdotname</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/8f93a872e399bc1353cc8d4e791d5401?d=https%3A%2F%2Fidenticons.github.com%2F7ce3284b743aefde80ffd9aec500e085.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mislav">mislav</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/27705c8168daa5136abc3bfaaa76ae88?d=https%3A%2F%2Fidenticons.github.com%2Fe21cc1d36a6a93d33f9b72adfea44b8f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/stevestmartin">stevestmartin</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/b76e0cddb0326224a411a8fbcaea7d9d?d=https%3A%2F%2Fidenticons.github.com%2F9565d975e952ec21ae8131e05130036c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/qhoxie">qhoxie</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/35da631954825179143c86fa42a10954?d=https%3A%2F%2Fidenticons.github.com%2Fb5022b8fa3fa419ab039a0f8d70866a2.png&amp;r=x&amp;s=140" width="24" />
            <a href="/scottgonzalez">scottgonzalez</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/5a90a67fa1a92e6a4b605cfd8da5e375?d=https%3A%2F%2Fidenticons.github.com%2F742a53737ba9579f5fdab3038fe4b6b2.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lucasmazza">lucasmazza</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/4d4c378e3a10e2d01a636a33c359734c?d=https%3A%2F%2Fidenticons.github.com%2F6f3e24662182e125fc58299809ee6a67.png&amp;r=x&amp;s=140" width="24" />
            <a href="/sskirby">sskirby</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/7a0e72a6f55811246bb5d9a946fd2e49?d=https%3A%2F%2Fidenticons.github.com%2F9365ae980268ef00988a8048fa732226.png&amp;r=x&amp;s=140" width="24" />
            <a href="/RStankov">RStankov</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/c9f60c0cb1d941fa8e93bbfcb907c27e?d=https%3A%2F%2Fidenticons.github.com%2F20aeb8a8621709e3ac91e891e7c62f8f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/brianmario">brianmario</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/864ae2178a21699972a64f5262b62b00?d=https%3A%2F%2Fidenticons.github.com%2Fcecd01c1eb84f4f0f2b48e121c8a62f5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lucasuyezu">lucasuyezu</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/fca9f7376b4527353138bf920817d59e?d=https%3A%2F%2Fidenticons.github.com%2F4042483f5c2c4015e2a6abd47aa76b6f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/escobera">escobera</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/d0ca2bf32bda9e9ea8c4473ffc3aaa0d?d=https%3A%2F%2Fidenticons.github.com%2Ffccb60fb512d13df5083790d64c4d5dd.png&amp;r=x&amp;s=140" width="24" />
            <a href="/foca">foca</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/8ccebbc3d28f903d5c214efd3447ac71?d=https%3A%2F%2Fidenticons.github.com%2Ff52378e14237225a6f6c7d802dc6abbd.png&amp;r=x&amp;s=140" width="24" />
            <a href="/stefanpenner">stefanpenner</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/e837f6b7fd146ab16ed3d663476c063e?d=https%3A%2F%2Fidenticons.github.com%2Fe20b21ae6508f22fc189c60a0880d0b8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/josevalim">josevalim</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/a908bf6680c4fa7279dd85d5012f7ed8?d=https%3A%2F%2Fidenticons.github.com%2F46a558d97954d0692411c861cf78ef79.png&amp;r=x&amp;s=140" width="24" />
            <a href="/webmat">webmat</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/0e556a2be10ff4f32bb9e6f9a2c00cfa?d=https%3A%2F%2Fidenticons.github.com%2F0a03d5e4473c0629cfb20c5c31543b06.png&amp;r=x&amp;s=140" width="24" />
            <a href="/miry">miry</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/9dbbb26b19283ce2dd0224d08731686c?d=https%3A%2F%2Fidenticons.github.com%2Fffb14ff15765b6c052427840000e8f15.png&amp;r=x&amp;s=140" width="24" />
            <a href="/martinlissmyr">martinlissmyr</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/75d17092335053d0df1f43f7c8ac3293?d=https%3A%2F%2Fidenticons.github.com%2Fa025095fa84f72622a158365214b1d96.png&amp;r=x&amp;s=140" width="24" />
            <a href="/otaviomedeiros">otaviomedeiros</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/3d3a40b43d638725a348384e70d86285?d=https%3A%2F%2Fidenticons.github.com%2Fbe6889aee890fded6eda5cce18ee95c3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ronalchn">ronalchn</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/b1409a8715cc91a1e9915d74f56952ff?d=https%3A%2F%2Fidenticons.github.com%2F27d68e41b3564317a4730a912ec8eb7b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lailsonbm">lailsonbm</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/76a777ff80f30bd3b390e275cce625bc?d=https%3A%2F%2Fidenticons.github.com%2F76cac4685e3749728f9c04bd3a86221f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/amatsuda">amatsuda</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/c6b63e9914149409d4b007918649ae65?d=https%3A%2F%2Fidenticons.github.com%2F31929d25d1c8e249e562153efe1dc65b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/khelll">khelll</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/d04d064616ae7fd752fdcb8daa5abdd6?d=https%3A%2F%2Fidenticons.github.com%2F960fc72b306e2c9879dbeaa4f765dad2.png&amp;r=x&amp;s=140" width="24" />
            <a href="/spastorino">spastorino</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/cdebe55961ee3852f4bb72c0d03e0df5?d=https%3A%2F%2Fidenticons.github.com%2Fe9cd34600c54a2dfcdbf441ea4c3be5a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/akre54">akre54</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/afd42fff23928a20972d60744fcdca4a?d=https%3A%2F%2Fidenticons.github.com%2F63bfd6e8f26d1d3537f4c5038264ef36.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jherdman">jherdman</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/b7c3e74b81432a7559b09adaa0dceffe?d=https%3A%2F%2Fidenticons.github.com%2Fd0fb9ef9a33dcc25d270640691dd9f74.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bhollis">bhollis</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/d2881b5d4c082996a62f23055b61956d?d=https%3A%2F%2Fidenticons.github.com%2Fc1464ded796adc7ac65355e3cc0df165.png&amp;r=x&amp;s=140" width="24" />
            <a href="/homakov">homakov</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/93e9084aa289b7f1f5e4ab6716a56c3b?d=https%3A%2F%2Fidenticons.github.com%2F5650a8f1c991eb9acc8850fd52129c59.png&amp;r=x&amp;s=140" width="24" />
            <a href="/emerleite">emerleite</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/63bae10ff70c16aeeec4adb8f4c72f18?d=https%3A%2F%2Fidenticons.github.com%2Ffb647ca6672b0930e9d00dc384d8b16f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ebeigarts">ebeigarts</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/79b1b001d5ff186c9bd02e7487aa4142?d=https%3A%2F%2Fidenticons.github.com%2F00d021a70eb568ae3a6778add4fed2e9.png&amp;r=x&amp;s=140" width="24" />
            <a href="/derekprior">derekprior</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/ed9635566b34ade32274f510f0f9a6d2?d=https%3A%2F%2Fidenticons.github.com%2Fcdcb2f5c7b071143529ef7f2705dfbc4.png&amp;r=x&amp;s=140" width="24" />
            <a href="/dhh">dhh</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/817485d0e2b0697f50007cca35d9e872?d=https%3A%2F%2Fidenticons.github.com%2F7cc5ca26d6fbb6db2b134ef07cc68925.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ssinghi">ssinghi</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/2e3939e9967f2468e491a44549e21eda?d=https%3A%2F%2Fidenticons.github.com%2F4a3050ae2c77da4f9c90e2e58e8e520f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ciaranlee">ciaranlee</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/fd40f196fdaf97696440b244dbcdcf29?d=https%3A%2F%2Fidenticons.github.com%2Fcf48f587e94ce8d86943c900bdf33c2e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bradphilips">bradphilips</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/eb42ff31986f5ed1d97580819134d702?d=https%3A%2F%2Fidenticons.github.com%2F56ba199d2c826a25b96938b750b1f89a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/igorw">igorw</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/dd049ca670858fd4df5539a582c044a9?d=https%3A%2F%2Fidenticons.github.com%2F59a7e34db94beaca5874abd128ed59f6.png&amp;r=x&amp;s=140" width="24" />
            <a href="/javierjulio">javierjulio</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>399 lines (326 sloc)</span>
        <span>15.575 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards js-update-url-with-hash"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/rails/jquery-ujs/edit/master/src/rails.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/rails/jquery-ujs/raw/master/src/rails.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/rails/jquery-ujs/blame/master/src/rails.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/rails/jquery-ujs/commits/master/src/rails.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/rails/jquery-ujs/delete/master/src/rails.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="cm">/**</span></div><div class='line' id='LC4'><span class="cm"> * Unobtrusive scripting adapter for jQuery</span></div><div class='line' id='LC5'><span class="cm"> * https://github.com/rails/jquery-ujs</span></div><div class='line' id='LC6'><span class="cm"> *</span></div><div class='line' id='LC7'><span class="cm"> * Requires jQuery 1.7.0 or later.</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Released under the MIT license</span></div><div class='line' id='LC10'><span class="cm"> *</span></div><div class='line' id='LC11'><span class="cm"> */</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>&nbsp;&nbsp;<span class="c1">// Cut down on the number of issues from people inadvertently including jquery_ujs twice</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="c1">// by detecting and raising an error when it happens.</span></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">rails</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;jquery-ujs has already been loaded!&#39;</span><span class="p">);</span></div><div class='line' id='LC17'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="c1">// Shorthand to make it a little easier to call public rails functions from within rails.js</span></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rails</span><span class="p">;</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$document</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">);</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">rails</span> <span class="o">=</span> <span class="nx">rails</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Link elements bound by jquery-ujs</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">linkClickSelector</span><span class="o">:</span> <span class="s1">&#39;a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]&#39;</span><span class="p">,</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Button elements bound by jquery-ujs</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buttonClickSelector</span><span class="o">:</span> <span class="s1">&#39;button[data-remote]&#39;</span><span class="p">,</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Select elements bound by jquery-ujs</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inputChangeSelector</span><span class="o">:</span> <span class="s1">&#39;select[data-remote], input[data-remote], textarea[data-remote]&#39;</span><span class="p">,</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Form elements bound by jquery-ujs</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">formSubmitSelector</span><span class="o">:</span> <span class="s1">&#39;form&#39;</span><span class="p">,</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Form input elements bound by jquery-ujs</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">formInputClickSelector</span><span class="o">:</span> <span class="s1">&#39;form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])&#39;</span><span class="p">,</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Form input elements disabled during form submission</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">disableSelector</span><span class="o">:</span> <span class="s1">&#39;input[data-disable-with], button[data-disable-with], textarea[data-disable-with]&#39;</span><span class="p">,</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Form input elements re-enabled after form submission</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enableSelector</span><span class="o">:</span> <span class="s1">&#39;input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled&#39;</span><span class="p">,</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Form required input elements</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">requiredInputSelector</span><span class="o">:</span> <span class="s1">&#39;input[name][required]:not([disabled]),textarea[name][required]:not([disabled])&#39;</span><span class="p">,</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Form file input elements</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileInputSelector</span><span class="o">:</span> <span class="s1">&#39;input[type=file]&#39;</span><span class="p">,</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Link onClick disable selector with possible reenable after remote submission</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">linkDisableSelector</span><span class="o">:</span> <span class="s1">&#39;a[data-disable-with]&#39;</span><span class="p">,</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make sure that every Ajax request sends the CSRF token</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">CSRFProtection</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">token</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;meta[name=&quot;csrf-token&quot;]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;content&#39;</span><span class="p">);</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">token</span><span class="p">)</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;X-CSRF-Token&#39;</span><span class="p">,</span> <span class="nx">token</span><span class="p">);</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// making sure that all forms have actual up-to-date token(cached forms contain old one)</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">refreshCSRFTokens</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">csrfToken</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;meta[name=csrf-token]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;content&#39;</span><span class="p">);</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">csrfParam</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;meta[name=csrf-param]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;content&#39;</span><span class="p">);</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;form input[name=&quot;&#39;</span> <span class="o">+</span> <span class="nx">csrfParam</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">).</span><span class="nx">val</span><span class="p">(</span><span class="nx">csrfToken</span><span class="p">);</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Triggers an event on an element and returns false if the event result is false</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Event</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">event</span><span class="p">.</span><span class="nx">result</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">confirm</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">confirm</span><span class="p">(</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Default ajax function, may be overridden with custom function in $.rails.ajax</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Default way to get an element&#39;s href. May be overridden at $.rails.href.</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">href</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">);</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Submits &quot;remote&quot; forms and links with ajax</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handleRemote</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">elCrossDomain</span><span class="p">,</span> <span class="nx">crossDomain</span><span class="p">,</span> <span class="nx">withCredentials</span><span class="p">,</span> <span class="nx">dataType</span><span class="p">,</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="s1">&#39;ajax:before&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elCrossDomain</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;cross-domain&#39;</span><span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">crossDomain</span> <span class="o">=</span> <span class="nx">elCrossDomain</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">elCrossDomain</span><span class="p">;</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">withCredentials</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;with-credentials&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dataType</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;type&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">ajaxSettings</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajaxSettings</span><span class="p">.</span><span class="nx">dataType</span><span class="p">);</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;form&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;method&#39;</span><span class="p">);</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;action&#39;</span><span class="p">);</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">serializeArray</span><span class="p">();</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// memoized value from clicked submit button</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">button</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:submit-button&#39;</span><span class="p">);</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">button</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">button</span><span class="p">);</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:submit-button&#39;</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">inputChangeSelector</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;method&#39;</span><span class="p">);</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;url&#39;</span><span class="p">);</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">serialize</span><span class="p">();</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;params&#39;</span><span class="p">))</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">+</span> <span class="s2">&quot;&amp;&quot;</span> <span class="o">+</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;params&#39;</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">buttonClickSelector</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;method&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;get&#39;</span><span class="p">;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;url&#39;</span><span class="p">);</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">serialize</span><span class="p">();</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;params&#39;</span><span class="p">))</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">+</span> <span class="s2">&quot;&amp;&quot;</span> <span class="o">+</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;params&#39;</span><span class="p">);</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;method&#39;</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">href</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;params&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">method</span> <span class="o">||</span> <span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">dataType</span><span class="o">:</span> <span class="nx">dataType</span><span class="p">,</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// stopping the &quot;ajax:beforeSend&quot; event will cancel the ajax request</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeSend</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">dataType</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;accept&#39;</span><span class="p">,</span> <span class="s1">&#39;*/*;q=0.5, &#39;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">accepts</span><span class="p">.</span><span class="nx">script</span><span class="p">);</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="s1">&#39;ajax:beforeSend&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">settings</span><span class="p">]);</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;ajax:success&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">data</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">]);</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">status</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;ajax:complete&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">status</span><span class="p">]);</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;ajax:error&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">error</span><span class="p">]);</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">crossDomain</span><span class="o">:</span> <span class="nx">crossDomain</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// There is no withCredentials for IE6-8 when</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// &quot;Enable native XMLHTTP support&quot; is disabled</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">withCredentials</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">xhrFields</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">withCredentials</span><span class="o">:</span> <span class="nx">withCredentials</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Only pass url to `ajax` options if not blank</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span> <span class="nx">options</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">jqxhr</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;ajax:send&#39;</span><span class="p">,</span> <span class="nx">jqxhr</span><span class="p">);</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jqxhr</span><span class="p">;</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Handles &quot;data-method&quot; on links such as:</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// &lt;a href=&quot;/users/5&quot; data-method=&quot;delete&quot; rel=&quot;nofollow&quot; data-confirm=&quot;Are you sure?&quot;&gt;Delete&lt;/a&gt;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handleMethod</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">link</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">href</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">href</span><span class="p">(</span><span class="nx">link</span><span class="p">),</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;method&#39;</span><span class="p">),</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;target&#39;</span><span class="p">),</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">csrfToken</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;meta[name=csrf-token]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;content&#39;</span><span class="p">),</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">csrfParam</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;meta[name=csrf-param]&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;content&#39;</span><span class="p">),</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;form method=&quot;post&quot; action=&quot;&#39;</span> <span class="o">+</span> <span class="nx">href</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;/form&gt;&#39;</span><span class="p">),</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">metadataInput</span> <span class="o">=</span> <span class="s1">&#39;&lt;input name=&quot;_method&quot; value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">method</span> <span class="o">+</span> <span class="s1">&#39;&quot; type=&quot;hidden&quot; /&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">csrfParam</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">csrfToken</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">metadataInput</span> <span class="o">+=</span> <span class="s1">&#39;&lt;input name=&quot;&#39;</span> <span class="o">+</span> <span class="nx">csrfParam</span> <span class="o">+</span> <span class="s1">&#39;&quot; value=&quot;&#39;</span> <span class="o">+</span> <span class="nx">csrfToken</span> <span class="o">+</span> <span class="s1">&#39;&quot; type=&quot;hidden&quot; /&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span> <span class="nx">form</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;target&#39;</span><span class="p">,</span> <span class="nx">target</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">hide</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="nx">metadataInput</span><span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">);</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">submit</span><span class="p">();</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* Disables form elements:</span></div><div class='line' id='LC187'><span class="cm">      - Caches element value in &#39;ujs:enable-with&#39; data store</span></div><div class='line' id='LC188'><span class="cm">      - Replaces element text with value of &#39;data-disable-with&#39; attribute</span></div><div class='line' id='LC189'><span class="cm">      - Sets disabled property to true</span></div><div class='line' id='LC190'><span class="cm">    */</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">disableFormElements</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">form</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">disableSelector</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">element</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;button&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;html&#39;</span> <span class="o">:</span> <span class="s1">&#39;val&#39;</span><span class="p">;</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:enable-with&#39;</span><span class="p">,</span> <span class="nx">element</span><span class="p">[</span><span class="nx">method</span><span class="p">]());</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">[</span><span class="nx">method</span><span class="p">](</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;disable-with&#39;</span><span class="p">));</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* Re-enables disabled form elements:</span></div><div class='line' id='LC201'><span class="cm">      - Replaces element text with cached value from &#39;ujs:enable-with&#39; data store (created in `disableFormElements`)</span></div><div class='line' id='LC202'><span class="cm">      - Sets disabled property to false</span></div><div class='line' id='LC203'><span class="cm">    */</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enableFormElements</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">form</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">enableSelector</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">element</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;button&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;html&#39;</span> <span class="o">:</span> <span class="s1">&#39;val&#39;</span><span class="p">;</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:enable-with&#39;</span><span class="p">))</span> <span class="nx">element</span><span class="p">[</span><span class="nx">method</span><span class="p">](</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:enable-with&#39;</span><span class="p">));</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;<span class="cm">/* For &#39;data-confirm&#39; attribute:</span></div><div class='line' id='LC213'><span class="cm">      - Fires `confirm` event</span></div><div class='line' id='LC214'><span class="cm">      - Shows the confirmation dialog</span></div><div class='line' id='LC215'><span class="cm">      - Fires the `confirm:complete` event</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'><span class="cm">      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.</span></div><div class='line' id='LC218'><span class="cm">      Attaching a handler to the element&#39;s `confirm` event that returns a `falsy` value cancels the confirmation dialog.</span></div><div class='line' id='LC219'><span class="cm">      Attaching a handler to the element&#39;s `confirm:complete` event that returns a `falsy` value makes this function</span></div><div class='line' id='LC220'><span class="cm">      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.</span></div><div class='line' id='LC221'><span class="cm">   */</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">allowAction</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">message</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;confirm&#39;</span><span class="p">),</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">answer</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">message</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="s1">&#39;confirm&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">answer</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">confirm</span><span class="p">(</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="s1">&#39;confirm:complete&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">answer</span><span class="p">]);</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">answer</span> <span class="o">&amp;&amp;</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Helper function which checks for blank inputs in a form that match the specified CSS selector</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">blankInputs</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">form</span><span class="p">,</span> <span class="nx">specifiedSelector</span><span class="p">,</span> <span class="nx">nonBlank</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">inputs</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(),</span> <span class="nx">input</span><span class="p">,</span> <span class="nx">valueToCheck</span><span class="p">,</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">selector</span> <span class="o">=</span> <span class="nx">specifiedSelector</span> <span class="o">||</span> <span class="s1">&#39;input,textarea&#39;</span><span class="p">,</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">allInputs</span> <span class="o">=</span> <span class="nx">form</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">selector</span><span class="p">);</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">allInputs</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">valueToCheck</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;input[type=checkbox],input[type=radio]&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">input</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:checked&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">input</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">valueToCheck</span> <span class="o">===</span> <span class="o">!</span><span class="nx">nonBlank</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Don&#39;t count unchecked required radio if other radio with same name is checked</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;input[type=radio]&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">allInputs</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;input[type=radio]:checked[name=&quot;&#39;</span> <span class="o">+</span> <span class="nx">input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">).</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="c1">// Skip to next input</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inputs</span> <span class="o">=</span> <span class="nx">inputs</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">input</span><span class="p">);</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">inputs</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">inputs</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Helper function which checks for non-blank inputs in a form that match the specified CSS selector</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nonBlankInputs</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">form</span><span class="p">,</span> <span class="nx">specifiedSelector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">blankInputs</span><span class="p">(</span><span class="nx">form</span><span class="p">,</span> <span class="nx">specifiedSelector</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span> <span class="c1">// true specifies nonBlank</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC261'><br/></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Helper function, needed to provide consistent behavior in IE</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stopEverything</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;ujs:everythingStopped&#39;</span><span class="p">);</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">stopImmediatePropagation</span><span class="p">();</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  replace element&#39;s html with the &#39;data-disable-with&#39; after storing original html</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  and prevent clicking on it</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">disableElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:enable-with&#39;</span><span class="p">,</span> <span class="nx">element</span><span class="p">.</span><span class="nx">html</span><span class="p">());</span> <span class="c1">// store enabled state</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;disable-with&#39;</span><span class="p">));</span> <span class="c1">// set to disabled state</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;click.railsDisable&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// prevent further clicking</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">stopEverything</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// restore element to its original state which was disabled by &#39;disableElement&#39; above</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enableElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:enable-with&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:enable-with&#39;</span><span class="p">));</span> <span class="c1">// set to old enabled state</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">removeData</span><span class="p">(</span><span class="s1">&#39;ujs:enable-with&#39;</span><span class="p">);</span> <span class="c1">// clean up cache</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;click.railsDisable&#39;</span><span class="p">);</span> <span class="c1">// enable element</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="nx">$document</span><span class="p">,</span> <span class="s1">&#39;rails:attachBindings&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC291'><br/></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">ajaxPrefilter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">originalOptions</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">){</span> <span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">crossDomain</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">CSRFProtection</span><span class="p">(</span><span class="nx">xhr</span><span class="p">);</span> <span class="p">}});</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">linkDisableSelector</span><span class="p">,</span> <span class="s1">&#39;ajax:complete&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rails</span><span class="p">.</span><span class="nx">enableElement</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">linkClickSelector</span><span class="p">,</span> <span class="s1">&#39;click.rails&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">link</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;method&#39;</span><span class="p">),</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;params&#39;</span><span class="p">),</span> <span class="nx">metaClick</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">metaKey</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">ctrlKey</span><span class="p">;</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">rails</span><span class="p">.</span><span class="nx">allowAction</span><span class="p">(</span><span class="nx">link</span><span class="p">))</span> <span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">stopEverything</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">metaClick</span> <span class="o">&amp;&amp;</span> <span class="nx">link</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">linkDisableSelector</span><span class="p">))</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">disableElement</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;remote&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">metaClick</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">method</span> <span class="o">||</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;GET&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">handleRemote</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">handleRemote</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// response from rails.handleRemote() will either be false or a deferred object promise.</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">handleRemote</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rails</span><span class="p">.</span><span class="nx">enableElement</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handleRemote</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">enableElement</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC315'><br/></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">link</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;method&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rails</span><span class="p">.</span><span class="nx">handleMethod</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC321'><br/></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">buttonClickSelector</span><span class="p">,</span> <span class="s1">&#39;click.rails&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">button</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">rails</span><span class="p">.</span><span class="nx">allowAction</span><span class="p">(</span><span class="nx">button</span><span class="p">))</span> <span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">stopEverything</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC325'><br/></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rails</span><span class="p">.</span><span class="nx">handleRemote</span><span class="p">(</span><span class="nx">button</span><span class="p">);</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">inputChangeSelector</span><span class="p">,</span> <span class="s1">&#39;change.rails&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">link</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">rails</span><span class="p">.</span><span class="nx">allowAction</span><span class="p">(</span><span class="nx">link</span><span class="p">))</span> <span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">stopEverything</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC333'><br/></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rails</span><span class="p">.</span><span class="nx">handleRemote</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC337'><br/></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">formSubmitSelector</span><span class="p">,</span> <span class="s1">&#39;submit.rails&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">remote</span> <span class="o">=</span> <span class="nx">form</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;remote&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">,</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">blankRequiredInputs</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">blankInputs</span><span class="p">(</span><span class="nx">form</span><span class="p">,</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">requiredInputSelector</span><span class="p">),</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nonBlankFileInputs</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">nonBlankInputs</span><span class="p">(</span><span class="nx">form</span><span class="p">,</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">fileInputSelector</span><span class="p">);</span></div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">rails</span><span class="p">.</span><span class="nx">allowAction</span><span class="p">(</span><span class="nx">form</span><span class="p">))</span> <span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">stopEverything</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// skip other logic when required values are missing or file upload is present</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">blankRequiredInputs</span> <span class="o">&amp;&amp;</span> <span class="nx">form</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;novalidate&quot;</span><span class="p">)</span> <span class="o">==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="nx">form</span><span class="p">,</span> <span class="s1">&#39;ajax:aborted:required&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">blankRequiredInputs</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">stopEverything</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC350'><br/></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">remote</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nonBlankFileInputs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// slight timeout so that the submit button gets properly serialized</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// (make it easy for event handler to serialize form without disabled values)</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">disableFormElements</span><span class="p">(</span><span class="nx">form</span><span class="p">);</span> <span class="p">},</span> <span class="mi">13</span><span class="p">);</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">aborted</span> <span class="o">=</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="nx">form</span><span class="p">,</span> <span class="s1">&#39;ajax:aborted:file&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">nonBlankFileInputs</span><span class="p">]);</span></div><div class='line' id='LC357'><br/></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// re-enable form elements if event bindings return false (canceling normal form submission)</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">aborted</span><span class="p">)</span> <span class="p">{</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">enableFormElements</span><span class="p">(</span><span class="nx">form</span><span class="p">);</span> <span class="p">},</span> <span class="mi">13</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">aborted</span><span class="p">;</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC363'><br/></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rails</span><span class="p">.</span><span class="nx">handleRemote</span><span class="p">(</span><span class="nx">form</span><span class="p">);</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// slight timeout so that the submit button gets properly serialized</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">disableFormElements</span><span class="p">(</span><span class="nx">form</span><span class="p">);</span> <span class="p">},</span> <span class="mi">13</span><span class="p">);</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">formInputClickSelector</span><span class="p">,</span> <span class="s1">&#39;click.rails&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">button</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">rails</span><span class="p">.</span><span class="nx">allowAction</span><span class="p">(</span><span class="nx">button</span><span class="p">))</span> <span class="k">return</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">stopEverything</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// register the pressed submit button</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">button</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">),</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">name</span> <span class="o">?</span> <span class="p">{</span><span class="nx">name</span><span class="o">:</span><span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span><span class="nx">button</span><span class="p">.</span><span class="nx">val</span><span class="p">()}</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">button</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;form&#39;</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;ujs:submit-button&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC384'><br/></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">formSubmitSelector</span><span class="p">,</span> <span class="s1">&#39;ajax:beforeSend.rails&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span> <span class="o">==</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">)</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">disableFormElements</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$document</span><span class="p">.</span><span class="nx">delegate</span><span class="p">(</span><span class="nx">rails</span><span class="p">.</span><span class="nx">formSubmitSelector</span><span class="p">,</span> <span class="s1">&#39;ajax:complete.rails&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span> <span class="o">==</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">)</span> <span class="nx">rails</span><span class="p">.</span><span class="nx">enableFormElements</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rails</span><span class="p">.</span><span class="nx">refreshCSRFTokens</span><span class="p">();</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC396'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC397'><br/></div><div class='line' id='LC398'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03942s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/rails/jquery-ujs/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>


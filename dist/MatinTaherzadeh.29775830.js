// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Scripts/MatinTaherzadeh.js":[function(require,module,exports) {
/***** Selecting DOM elements ********/
var welcoming = document.querySelector("#welcome-overlay");
var gotItButton = document.querySelector("#got-it-button");
var overlay = document.querySelector("#welcome-overlay");
var faders = document.querySelectorAll(".fade-in");
var sliders = document.querySelectorAll(".slide-in");
var MainTitlesfaders = document.querySelectorAll(".fade-in-main-titles");
var MainTitlessliders = document.querySelectorAll(".slide-in-main-titles");
var sections = document.querySelectorAll("section");
var navLi = document.querySelectorAll("#header-nav ul li");
var GoToTopButton = document.getElementById("GoToTopButton");
var mainMenu = document.querySelector(".mainMenu");
var closeMenu = document.querySelector(".closeMenu");
var openMenu = document.querySelector(".openMenu");
var navLinks = document.querySelectorAll(".nav-item");
var fadersSkills = document.querySelectorAll(".fade-in-skills");
var slidersSkills = document.querySelectorAll(".slide-in-skills");
var fadersSkillsLE = document.querySelectorAll(".fade-in-skills-le");
var slidersSkillsLE = document.querySelectorAll(".slide-in-skills-le");
var fadersResume = document.querySelectorAll(".fade-in-resume");
var slidersResume = document.querySelectorAll(".slide-in-resume");
var threejsModal = document.getElementById("threejsModal");
var closeButtonThreejs = document.getElementsByClassName("threejs-close")[0];
var resumeSection = document.querySelector("#Resume");
var fadersEntrepreneur = document.querySelectorAll(".fade-in-entrepreneur");
var slidersEntrepreneur = document.querySelectorAll(".slide-in-entrepreneur");
var fadersContact = document.querySelectorAll(".fade-in-contact");
var slidersContact = document.querySelectorAll(".slide-in-contact");
var fadersComment = document.querySelectorAll(".fade-in-comment");
var slidersComment = document.querySelectorAll(".slide-in-comment");
var commentSection = document.querySelector("#Comment");
var moreResumeElement = document.querySelector(".more-resume");
var fixedTriggerModal = document.getElementById("fixed-trigger-modal");
var loaderContainer = document.querySelector(".loader-container");
var loader = document.querySelector(".loader");
/***** clearing URL after refreshing the page ********/

history.pushState("", "", window.location.pathname);
/***** Loading page ********/

showLoader();
window.addEventListener("load", function () {
  setTimeout(hideLoader, 50);
  setTimeout(function () {
    overlay.classList.add("showWelcome");
  }, 2500);
});
gotItButton.addEventListener("click", function () {
  overlay.classList.remove("showWelcome");
  overlay.classList.add("hideWelcome");
});
/***** Matin Taherzadeh ********/

var appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px"
};
var appearOptionsMainTitles = {
  threshold: 0,
  rootMargin: "0px 0px -120px 0px"
};
var appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);
var appearOnScrollMainTitles = new IntersectionObserver(function (entries, appearOnScrollMainTitles) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollMainTitles.unobserve(entry.target);
    }
  });
}, appearOptionsMainTitles);
faders.forEach(function (fader) {
  appearOnScroll.observe(fader);
});
sliders.forEach(function (slider) {
  appearOnScroll.observe(slider);
});
MainTitlesfaders.forEach(function (faders) {
  appearOnScrollMainTitles.observe(faders);
});
MainTitlessliders.forEach(function (sliders) {
  appearOnScrollMainTitles.observe(sliders);
});
/***** Smooth scroll ********/

var scroll = new SmoothScroll('.mainMenu a[href*="#"]', {
  speed: 350
});
/***** GoToTopButton ********/

window.onscroll = function () {
  scrollFunctionButton();
};

GoToTopButton.addEventListener("click", topFunction);

function scrollFunctionButton() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    GoToTopButton.style.display = "block";
  } else {
    GoToTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/***** Highlight nav menu items on scroll ********/


window.addEventListener("scroll", function () {
  var current = "";
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(function (li) {
    li.classList.remove("active");

    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
/***** End of Matin Taharzadeh ********/

/***** Hamburger menu ********/

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    mainMenu.style.top = "-1000%";
  });
}

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-1000%";
}
/***** Fixed nav ********/


$(document).ready(function () {
  var aboveHeight = $("header").height();
  $(window).scroll(function () {
    if ($(window).scrollTop() > aboveHeight) {
      $("nav").addClass("fixed").css("top", "0").next().css("padding-top", "70px");
    } else {
      $("nav").removeClass("fixed").css("padding-top", "0");
    }
  });
});
/***** navigation link active class ********/

$(document).ready(function () {
  $("#header-nav ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
/***** End of header ********/

/***** Skills ********/

var appearOptionsSkills = {
  threshold: 0,
  rootMargin: "0px 0px -120px 0px"
};
var appearOptionsSkillsLE = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};
var appearOnScrollSkills = new IntersectionObserver(function (entries, appearOnScrollSkills) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollSkills.unobserve(entry.target);
    }
  });
}, appearOptionsSkills);
var appearOnScrollSkillsLE = new IntersectionObserver(function (entries, appearOnScrollSkillsLE) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollSkillsLE.unobserve(entry.target);
    }
  });
}, appearOptionsSkillsLE);
fadersSkills.forEach(function (Fader) {
  appearOnScrollSkills.observe(Fader);
});
slidersSkills.forEach(function (Slider) {
  appearOnScrollSkills.observe(Slider);
});
fadersSkillsLE.forEach(function (Fader) {
  appearOnScrollSkillsLE.observe(Fader);
});
slidersSkillsLE.forEach(function (Slider) {
  appearOnScrollSkillsLE.observe(Slider);
});
/***** End of Skills ********/

/***** Resume ********/

var appearOptionsResume = {
  threshold: 0,
  rootMargin: "0px 0px 10px 0px"
};
var appearOnScrollResume = new IntersectionObserver(function (entries, appearOnScrollResume) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollResume.unobserve(entry.target);
    }
  });
}, appearOptionsResume);
fadersResume.forEach(function (fader) {
  appearOnScrollResume.observe(fader);
});
slidersResume.forEach(function (slider) {
  appearOnScrollResume.observe(slider);
});
$(document).ready(function () {
  $("body").on("click", "#Resume .btn", function () {
    $("#Resume-items .btn").not(this).removeClass("active");

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
  $(".btn-Resume-buttons").click(function (e) {
    $(".collapse").collapse("hide");
  });
});
/***** Threejs modal ********/
// Check if the modal has been opened before

var modalOpenedBefore = localStorage.getItem("modalOpened");

function showModal() {
  threejsModal.style.display = "block";
}

function hideModal() {
  threejsModal.style.display = "none";
} // IntersectionObserver options


var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5 // Trigger when at least half of the target is visible

}; // IntersectionObserver callback function

function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      setTimeout(showModal, 2000); // Disconnect the observer once the modal is shown

      observer.disconnect();
    }
  });
}

var observer = new IntersectionObserver(handleIntersection, options);
observer.observe(resumeSection);

closeButtonThreejs.onclick = function () {
  hideModal();
  localStorage.setItem("modalClosed", true);
  document.getElementById("fixed-trigger-modal").style.display = "block";
}; // Fixed trigger modal logic


if (!modalOpenedBefore && localStorage.getItem("modalClosed")) {
  document.getElementById("fixed-trigger-modal").style.display = "block";
} // Fixed trigger click handler


document.getElementById("fixed-trigger-modal").onclick = function () {
  showModal();
  this.style.display = "none";
}; // Close modal when clicking outside


function closeModalOutsideClick(event) {
  if (event.target === threejsModal) {
    hideModal();
    localStorage.setItem("modalClosed", true);
    document.getElementById("fixed-trigger-modal").style.display = "block";
  }
} // Close modal on Escape key press


function closeModalOnEscape(event) {
  if (event.key === "Escape") {
    hideModal();
    localStorage.setItem("modalClosed", true);
    document.getElementById("fixed-trigger-modal").style.display = "block";
  }
}

window.addEventListener("click", closeModalOutsideClick);
window.addEventListener("keydown", closeModalOnEscape);
/***** End of resume ********/

/***** Entrepreneur ********/

var appearOptionsEntrepreneur = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};
var appearOnScrollEntrepreneur = new IntersectionObserver(function (entries, appearOnScrollEntrepreneur) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollEntrepreneur.unobserve(entry.target);
    }
  });
}, appearOptionsEntrepreneur);
fadersEntrepreneur.forEach(function (fader) {
  appearOnScrollEntrepreneur.observe(fader);
});
slidersEntrepreneur.forEach(function (slider) {
  appearOnScrollEntrepreneur.observe(slider);
});
/***** End of Entrepreneur ********/

/***** Contact ********/

var appearOptionsContact = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};
var appearOptionsContactLE = {
  threshold: 0,
  rootMargin: "0px 0px -80px 0px"
};
var appearOnScrollContact = new IntersectionObserver(function (entries, appearOnScrollContact) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollContact.unobserve(entry.target);
    }
  });
}, appearOptionsContact);
var appearOnScrollContactLE = new IntersectionObserver(function (entries, appearOnScrollContactLE) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollContactLE.unobserve(entry.target);
    }
  });
}, appearOptionsContactLE);
fadersContact.forEach(function (fader) {
  appearOnScrollContact.observe(fader);
});
slidersContact.forEach(function (slider) {
  appearOnScrollContact.observe(slider);
});
fadersContact.forEach(function (fader) {
  appearOnScrollContactLE.observe(fader);
});
slidersContact.forEach(function (slider) {
  appearOnScrollContactLE.observe(slider);
});
/***** End of Contact ********/

/***** Comment ********/

var appearOptionsComment = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};
var appearOnScrollComment = new IntersectionObserver(function (entries, appearOnScrollComment) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollComment.unobserve(entry.target);
    }
  });
}, appearOptionsComment);
fadersComment.forEach(function (fader) {
  appearOnScrollComment.observe(fader);
});
slidersComment.forEach(function (slider) {
  appearOnScrollComment.observe(slider);
});
/***** End of Comment ********/

/***** GitHub more resume ********/

document.addEventListener("DOMContentLoaded", function () {
  function toggleVisibility() {
    var resumeSectionRect = commentSection.getBoundingClientRect();
    var showAt = resumeSectionRect.top;
    var hideAt = resumeSectionRect.bottom;

    if (window.scrollY >= showAt && window.scrollY <= hideAt) {
      moreResumeElement.style.display = "flex";
      fixedTriggerModal.style.display = "block";
    } else {
      moreResumeElement.style.display = "none";
      fixedTriggerModal.style.display = "none";
    }
  }

  window.addEventListener("scroll", toggleVisibility);
  toggleVisibility();
});
/***** Replacing container with container-fluid ********/

function updateClassesAndMargins(sectionId, marginRightLeft) {
  var addFluid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (window.matchMedia("(min-width: 1900px)").matches) {
    document.querySelectorAll("".concat(sectionId, " .container")).forEach(function (element) {
      element.classList.remove("container");

      if (addFluid) {
        element.classList.add("container-fluid");
      }

      element.style.margin = "auto ".concat(marginRightLeft);
    });
  }
}

function updateAllSections() {
  updateClassesAndMargins("#AboutMe", "0", true);
  updateClassesAndMargins("#Resume", "10rem", false);
  updateClassesAndMargins("#Contact", "20rem", false);
}

updateAllSections();
window.addEventListener("resize", updateAllSections);

function showLoader() {
  loaderContainer.style.display = "flex";
}

function hideLoader() {
  loaderContainer.classList.add("hidden");
}
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "14171" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","Scripts/MatinTaherzadeh.js"], null)
//# sourceMappingURL=/MatinTaherzadeh.29775830.js.map
(function ($, elementor) {
    "use strict";

    let Wexim = {

        init: function () {

            let widgets = {
                'wexim-team.default': Wexim.Team,
                'wexim-portfolio.default': Wexim.Portfolio,
                'wexim-testimonials.default': Wexim.Testimonials,
                'wexim-mockup.default': Wexim.Mockup,
                'wexim-counter.default': Wexim.Counter,
                'wexim-progress-bar.default': Wexim.Progress,
                'wexim-countdown.default': Wexim.Countdown,
            };

            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });

            elementorFrontend.hooks.addAction('frontend/element_ready/widget', function ($scope) {
                //Parallax Issue
                $(function () {
                    (function ($) {
                        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

                        $.fn.attrchange = function (callback) {
                            if (MutationObserver) {
                                var options = {
                                    subtree: false,
                                    attributes: true
                                };

                                var observer = new MutationObserver(function (mutations) {
                                    mutations.forEach(function (e) {
                                        callback.call(e.target, e.attributeName);
                                    });
                                });

                                return this.each(function () {
                                    observer.observe(this, options);
                                });

                            }
                        }
                    })(jQuery);

                    //Now you need to append event listener
                    $('.elementor-section').attrchange(function (attrName) {

                        if (attrName == 'class') {
                            $('.elementor-section:not(.parallax)').removeAttr('style');
                        }

                    });

                });
            });

        },

        Team: function ($scope) {

            let team_1 = $scope.find("#team-slider");
            let progress = $scope.find("#team-slider .progress-bar");
            let count = $scope.find("#team-slider .count");

            let team_2 = $scope.find("#team-slider-two");
            let team_3 = $scope.find("#team-three-slider");

            if (team_1.length > 0) {

                team_1.owlCarousel({
                    items: 3,
                    dots: false,
                    nav: false,
                    autoplay: 5000,
                    autoplayHoverPause: true,
                    rewind: true,
                    responsive: {
                        991: {
                            items: 3,
                        },
                        767: {
                            items: 2,
                        },
                        320: {
                            items: 1,
                        },
                    }
                });

                progress.each(function () {
                    $(this).appear(function () {
                        $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 3000)
                    });
                });

                count.each(function () {
                    $(this).appear(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                });

            }

            if (team_2.length > 0) {

                team_2.owlCarousel({
                    items: 4,
                    dots: false,
                    nav: false,
                    autoplay: 5000,
                    autoplayHoverPause: true,
                    rewind: true,
                    responsive: {
                        991: {
                            items: 4,
                        },
                        767: {
                            items: 2,
                        },
                        320: {
                            items: 1,
                        },
                    }
                });

            }

            if (team_3.length > 0) {

                team_3.owlCarousel({
                    items: 4,
                    dots: false,
                    nav: false,
                    responsive: {
                        991: {
                            items: 4,
                        },
                        767: {
                            items: 2,
                        },
                        320: {
                            items: 1,
                        },
                    }
                });

            }

        },

        Portfolio: function ($scope) {

            let work2 = $scope.find("#portfolio-measonry");
            let work3 = $scope.find("#js-grid-mosaic-flat");


            if (work2.length > 0) {
                work2.cubeportfolio({
                    filters: '#measonry-filters',
                    loadMoreAction: 'click',
                    layoutMode: 'grid',
                    defaultFilter: '*',
                    animationType: "scaleSides",
                    gapHorizontal: 30,
                    gapVertical: 30,
                    gridAdjustment: "responsive",
                    mediaQueries: [{
                        width: 1500,
                        cols: 2
                    }, {
                        width: 1100,
                        cols: 2
                    }, {
                        width: 768,
                        cols: 2
                    }, {
                        width: 480,
                        cols: 1
                    }, {
                        width: 320,
                        cols: 1
                    }],
                });
            }

            if (work3.length > 0) {

                work3.cubeportfolio({
                    filters: '#js-filters-mosaic-flat',
                    layoutMode: 'mosaic',
                    sortByDimension: true,
                    mediaQueries: [{
                        width: 1500,
                        cols: 6,
                    }, {
                        width: 1100,
                        cols: 4,
                    }, {
                        width: 800,
                        cols: 3,
                    }, {
                        width: 480,
                        cols: 1,
                        options: {
                            gapHorizontal: 15,
                            gapVertical: 15,
                        }
                    }],
                    defaultFilter: '*',
                    animationType: 'fadeOutTop',
                    gapHorizontal: 0,
                    gapVertical: 0,
                    gridAdjustment: 'responsive',
                    caption: 'zoom',
                });
            }

        },

        Testimonials: function ($scope) {

            let testimonial_1 = $scope.find("#testimonial_slider");

            /*Testimonial slide*/
            testimonial_1.owlCarousel({
                items: 1,
                autoplay: 2500,
                autoplayHoverPause: true,
                loop: true,
                dots: true,
                nav: false,
                margin: 10,
            });

        },

        Mockup: function ($scope) {

            let mockup_1 = $scope.find("#laptop-slide");
            let mockup_2 = $scope.find("#app-slider");

            /*Mockup 1 slide fade*/
            mockup_1.owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                nav: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                checkVisibility: true,
                autoplay: true,
                autoplayTimeout: 3000,
            });

            /*Mockup 2 one slide fade*/
            mockup_2.owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                nav: false,
                checkVisibility: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplay: true,
                autoplayTimeout: 3000,
            });


        },

        Counter: function ($scope) {

            let count = $scope.find(".count");

            count.each(function () {
                $(this).appear(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            });
        },

        Progress: function ($scope) {

            let progress = $scope.find(".progress-bar");
            let count = $scope.find(".count");

            progress.each(function () {
                $(this).appear(function () {
                    $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 3000)
                });
            });


            count.each(function () {
                $(this).appear(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            });

        },

        Countdown: function ($scope) {

            let countdown = $scope.find(".count_down");

            let date = countdown.data('countdown');

            countdown.downCount({
                date: date,
                offset: +10
            });
        },

    };
    $(window).on('elementor/frontend/init', Wexim.init);


}(jQuery, window.elementorFrontend));



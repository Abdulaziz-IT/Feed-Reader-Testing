/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */


        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         //I'm looping through allFeeds array, and checking if the url is defined, and if its length is greated than 0.
        it('URL defined', function () {
            allFeeds.forEach(function (element) {
                expect(element.url).toBeDefined();
                expect(element.url.length).toBeGreaterThan(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         //I'm looping through allFeeds array, and checking if the name is defined, and if its length is greated than 0.
        it('Name defined', function () {
            allFeeds.forEach(function (element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).toBeGreaterThan(0);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function () {

        let menu;
        beforeEach(function () {
            menu = document.body;
        });


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         //Just making sure that the menu has this class in order to be hidden.
        it('Menu hidden', function () {
            expect(menu).toHaveClass("menu-hidden");
        });



        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

         //If the menuIcon is clicked, it shouldn't have 'menu-hidden' class, but if it's clicked again, it should have it.
        it('Menu changes', function () {
            const menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click();
            expect(menu).not.toHaveClass("menu-hidden");
            menuIcon.click();
            expect(menu).toHaveClass("menu-hidden");
        });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         //After the async function is done, we will check the length of elements of class entry, the length should be 1 or more.
        it('loadFeed works', function (done) {
            const container = document.getElementsByClassName("feed")[0];
            const numOfEntries = container.getElementsByClassName("entry").length;
            expect(numOfEntries).toBeGreaterThanOrEqual(1);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         //I'm loading the feed, then I'm taking the first entry, then I'm loading the feed, and again I took the first entry, afterthat, I'll compare between the two.
        let oldFeedEntry;
        let newFeedEntry;
        beforeEach(function (done) {
                loadFeed(0, function () {
                    oldFeedEntry = document.getElementsByClassName("entry")[0];
                    loadFeed(1, function() {
                        newFeedEntry = document.getElementsByClassName("entry")[0];
                        done();
                    })                    
                });
        });


        it('content changes', function (done) {            
            expect(oldFeedEntry.textContent).not.toBe(newFeedEntry.textContent);
            done();
        })

    });


}());

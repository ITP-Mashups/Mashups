var app = {
    // Application Constructor
    initialize: function() {
        // config your skygear app
        skygear.config({
            'endPoint': 'https://<YOUR APP NAME>.skygeario.com/', // trailing slash is required
            'apiKey': '<YOUR API KEY HERE>',
        }).then(function() {
            console.log('skygear container is now ready for making API calls.');
        }, function(error) {
            console.log(error);
        });

        // click listeners
        $('.sign-up-button').click(function(e) {
            e.preventDefault();
            app.signUpUser();

        });

        $('.sign-in-button').click(function(e) {
            e.preventDefault();
            app.signInUser();
        });

        $('.new-entry').click(function(e) {
            e.preventDefault();
            app.createNewEntry();
        });

    },

    signUpUser: function() {
        var email = $('.sign-up .email').val();
        var password = $('.sign-up .password').val();

        skygear.auth.signupWithEmail(email, password).then(function(user) {
          console.log(user); // user object
          $('.hello .email').html('Hi ' + user.email );
          app.currentUser = user;
          app.changePage('#page2');
        }, function (error) {
          console.log(error);
          $('.errors').html(error.error.message);
        });
    },

    signInUser: function() {
        var email = $('.sign-in .email').val();
        var password = $('.sign-in .password').val();

        skygear.auth.loginWithEmail(email, password).then(function (user) {
            app.changePage('#page2');
            $('.hello .email').html('Hi ' + user.email );
            app.currentUser = user;
            app.findEntries();
            console.log(user); // user object
        }, function (error) {
          console.log(error); 
          $('.errors').html(error.error.message);   
        });
    },

    findEntries: function() {
        var Note = skygear.Record.extend('entry');
        var query = new skygear.Query(Note);
        query.equalTo('_owner_id', app.currentUser._id);
        query.limit = 10;

        skygear.publicDB.query(query).then(function(records) {
            $('.entries').html(""); // clean out the container to repopulate it
            for(var i = 0; i < records.length; i++) {
                $('.entries').append('<div class="record">' + records[i].content + '</div>');
            }            
        }, function (error) {
          console.error(error);
        });
    },

    changePage: function(id) {
        console.log("change page");
        $('.page').each(function() {
            $(this).hide();
        });
        $(id).fadeIn();
    },

    createNewEntry: function(imageData) {
        var message = $('.note').val();
        const Note = skygear.Record.extend('entry');
        var entry = new Note({ content: message });
        skygear.publicDB.save(entry)
            .then(function (record) {
                var message = $('.note').html(""); //clear out the note on success
                console.log(record); 
                app.findEntries();
            }, function (error) {
              console.log(error.error.message);
            });
    },
}
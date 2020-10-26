const db = require('./models');
const data = require('./tasks.json');

db.User.deleteMany({}, (err, deletedTasks) => {
    db.User.create(data.users, (err, seededUsers) => {
        if (err) console.log(err);
        
        console.log(data.users.length, 'users created successfully');
        
        process.exit();
    });
});
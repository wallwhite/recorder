const ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        history: false,
        remote: 'upstream',
        // add: true,
        branch: 'gh-page',
        repo: 'https://github.com/wallwhite/recorder.git',
    },
    (err) => {
        if (err) {
            console.log('Something went wrong', err);
            return;
        }
        console.log('Successfully published!');
    },
);

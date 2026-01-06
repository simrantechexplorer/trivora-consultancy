module.exports = {
    apps: [{
        name: "trivora-consultancy",
        script: "node_modules/next/dist/bin/next",
        args: "start -p 3000",
        interpreter: "node",
        cwd: "C:/Users/simra/OneDrive/Desktop/trivora3/trivora-consultancy",
        env: {
            NODE_ENV: "production",
        },
    }, ],
};
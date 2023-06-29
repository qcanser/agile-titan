import FakeYou from 'fakeyou.js'
const fy = new FakeYou.Client({
    token: '',
    usernameOrEmail: '',
    password: ''
});
await fy.start();

let str = "Every deadline missed is a victory for procrastination. Don't let it win, we're made of sterner stuff." 

let result = await fy.makeTTS('TM:mph385mx1yfr', str);
console.log(result.audioURL());
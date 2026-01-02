function NameSpace(name: string) {
    console.log(name);
}
NameSpace('AuthService');

const obj ={
    name: 'AuthService',
    version: '1.0.0'
};
console.log(obj['name']);
console.log(obj['version']);
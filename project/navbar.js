const hero = () => {
    var h3 = React.createElement('h3', {id:"h3"}, '+200');
    var p = React.createElement('p', {id:'para'}, 'Projects Completed');
    var h3 = React.createElement('h3', {id:"h3"}, '+50');
    var p = React.createElement('p', {id:'para'}, 'Startup Raised');

    var h1 = React.createElement('h1', {id:"h1"}, 'Hello');
    var p = React.createElement('p', {id:'hero-para'}, "- It's D.Nova a Design wizard");

    var h4 = React.createElement('h4', {id:'scroll-down'}, 'Scroll Down !');

    var div = React.createElement('div', {id: 'hero'}, [h1, p, h3, p, h4]);
    return div;
}

export default hero;
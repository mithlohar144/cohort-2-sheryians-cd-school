react router Dom 


- installl react-router-Dom
- in main.jsx  import <BrowerRouter> from 'react-router-dom';
- wrap <App/> ny brower Router in Main.jsx File
- make router (collection of all route) and inside Routes make Route

mention path (where to go) and elmet (what to reder) attributes

In Navbar use <Link /> by 'react'router-dom' tag to redirect to ant specific route
-make Navbar comppant as well and add it before <route> in App.jsc

- Nastedd route can b made by writiing in this way - path ="/product/men"
-dynamci routes can be made by writing this way - path="/priduct/:id"

- you can acess id by using useParams() hook inside the 



type of Routers

- BrowerRouter  :- use only web page not mobile app
 Adv-      - hirtory API
           - URl clear
           - modern web apps
           - Good SEO
- HashRouter :- 
        - canains -   /coures/#/about
        - NO SEO
        - Older brower

- Memoery Route :- Use in React Native

- Static Router :- use in Server side rendering

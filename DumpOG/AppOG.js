// if (loginstatus === true) {
//     console.log('login', loginUser);
//     return (
//         <Carrot value={pantry}>
//             <Router>
//                 <Switch>
//                     <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
//                         <CategoryTabs></CategoryTabs>
//                         <NewsFeed />
//                     </Route>
//                     <Route exact path='/story'>
//                         <NavBarTransparent></NavBarTransparent>
//                         <NewsStory />
//                     </Route>
//                     <Route exact path='/donate'>
//                         <Donate></Donate>
//                     </Route>
//                     <Route exact path='/profile'>
//                         <Profile></Profile>
//                     </Route>
//                     <Route exact path='/analytics'>
//                         <Analytics loginUser={
//                             loginUser} />
//                     </Route>
//                     <Route exact path='/404'> {/* Specify 404 route */}
//                         <FourOFour />
//                     </Route>
//                     <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
//                         <FourOFour />
//                     </Route>
//                 </Switch>
//             </Router>
//         </Carrot>
//     );
// } else {
//     console.log('NOT LOGIN RENDER');
//     return (
//         <Carrot value={pantry}>
//             <Router>
//                 <Switch>
//                     <Route exact path="/login">
//                         <Login />
//                     </Route>
//                     <Route exact path='/'> {/* If user visits root, redict to homepage/News-feed */}
//                         <Navbar />
//                         <div className="content">
//                             <CategoryTabs></CategoryTabs>
//                             <NewsFeed />
//                         </div>
//                     </Route>
//                     <Route exact path='/story'>
//                         <NewsStory />
//                     </Route>
//                     <Route exact path='/donate'>
//                         <Donate></Donate>
//                     </Route>
//                     <Route exact path='/profile'>
//                         <Navbar />
//                         <div className="content">
//                             <Profile></Profile>
//                         </div>
//                     </Route>
//                     <Route exact path='/404'> {/* Specify 404 route */}
//                         <FourOFour />
//                     </Route>
//                     <Route path='/'> {/* If user visits any page not specified, redirect to 404 */}
//                         <FourOFour />
//                     </Route>
//                 </Switch>
//             </Router>
//         </Carrot>
//     );
// }
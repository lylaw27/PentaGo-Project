import React from 'react';
import Header from './header';
import Footer from './footer';

function Properties() {
    return (
        <div>
            <Header />
            <div className="overlap">
                <div id="properties">
                    <div id="filter">
                        <form action="/action.php">
                            <input type="text" id="fname" name="firstname" placeholder="姓名"/>
                            <select id="City" name="City">
                                <option value="Birmingham">Birmingham</option>
                                <option value="Bristol">Bristol</option>
                                <option value="London">London</option>
                                <option value="Liverpool">Liverpool</option>
                                <option value="Manchester">Manchester</option>
                            </select>
                            <select id="City" name="City">
                                <option value="Birmingham">Birmingham</option>
                                <option value="Bristol">Bristol</option>
                                <option value="London">London</option>
                                <option value="Liverpool">Liverpool</option>
                                <option value="Manchester">Manchester</option>
                            </select>
                            <select id="City" name="City">
                                <option value="Birmingham">Birmingham</option>
                                <option value="Bristol">Bristol</option>
                                <option value="London">London</option>
                                <option value="Liverpool">Liverpool</option>
                                <option value="Manchester">Manchester</option>
                            </select>
                        </form>
                    </div>
                </div> 
                <Footer />
            </div>
           
        </div>
    );
}

export default Properties;
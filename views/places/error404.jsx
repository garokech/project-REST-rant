const React = require('react')
const Def = require("./default")

function error404 (){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                <img src="/images/confused.webp" alt="Confused" />
                <div>
                Photo by Bravo TV on <a href="https://bravotv.com/">Bravo.</a>
                </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404


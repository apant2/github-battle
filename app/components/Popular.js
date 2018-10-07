var React = require('react');

class Popular extends React.Component {

    //constructor is a property of js classes
    //not react specific
    constructor(props){
        super(props);
        //set default selected language to All
        this.state = {
            selectedLanguage: 'All'
        };

        //we need to make sure updateLangauge always refer's to the component's this
        //this.updateLanguage.bind(this)
        //says that take the updateLanguage created
        //in this context, and then return a function
        //identical to this.updateLanguage but with
        //this bound into the function
        //then set this.updateLanguage = to that new function
        this.updateLanguage = this.updateLanguage.bind(this);

    }

    //dont know what this is bound to unless you bind this method to some object
    updateLanguage(lang){
        this.setState(function(lang){
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {
        var languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
        //console.log(this); //this is the this for the component
        return (
            <ul className='languages'>
                //the second parameter in map tells map which context to run in
                //here we tell it to run in the context of the above fn;
                {languages.map(function(lang){
                    //this is a new this, unique to this function. No mixing with any other this objects
                    return(<li
                        //now we have this bound to the components
                        //context, but we need to pass in the
                        //actual lang object in this iteration
                        //use .bind here to return a NEW FUNCTION
                        //that has no new this context (i.e. null)
                        //and the lang parameter we need
                        //then assign this new function to onClick param
                        onClick={this.updateLanguage.bind(null,lang)}
                        style={lang === this.state.selectedLanguage ? {color: '#d0021b'}:null}
                        key = {lang}
                        onClick={this.updateLanguage}>
                            {lang}
                        </li>);
                }, this)}

            </ul>
        );
    }
}

module.exports = Popular;
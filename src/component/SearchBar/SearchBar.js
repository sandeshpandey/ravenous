import React,{Component} from 'react'
import './SearchBar.css';


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            term:'',
            location:'',
            sortBy:'best_match'
        };

        this.sortByOptions = {
            'Best Match':'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }else{
            return '';
        }
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy : sortByOption});
    }

    handleTermChange(event){
        let val = event.target.value;
        this.setState({term:val});
    }

    handleLocationChange(event){
        let val = event.target.value;
        this.setState({location:val});
    }

    handleSearch(event){
        let term = this.state.term;
        let location = this.state.location;
        let sortBy = this.state.sortBy;
        this.props.searchYelp(term, location, sortBy)
        event.preventDefault();
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key ={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption} </li>
        });

    }
    render(){
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                <input onChange={this.handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
            </div>
            </div>
        )
    }
}

export default SearchBar;
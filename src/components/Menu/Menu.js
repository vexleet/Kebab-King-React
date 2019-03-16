import React, { Component } from 'react'
import KebabCards from '../Common/Kebab/KebabCards';
import Paginator from '../Common/Paginator';
import { getKebabs, getStats } from '../../api/remote';
import Loading from '../../components/Common/Loading/Loading';

class MenuPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            kebabs: [],
            isLoading: true,
            stats: [],
        }

        this.onChange = this.onChange.bind(this);
        this.updateKebabsState = this.updateKebabsState.bind(this);
        this.updateStatsState = this.updateStatsState.bind(this);
    }

    updateKebabsState() {
        getKebabs().then((kebabs) => this.setState({ kebabs, isLoading: false, }));
    }

    updateStatsState() {
        getStats().then((s) => this.setState({ stats: s }));
    }

    componentDidMount() {
        this.updateKebabsState();
        this.updateStatsState();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />;
        }

        let { addOrder, isAdmin, isAuthenticated } = this.props;
        let { kebabs, stats } = this.state

        let kebabsCount = stats.products;
        const page = Number(this.props.match.params.page) || 1;

        let query = this.state.query
        if (query !== '') {
            kebabs = kebabs.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
            kebabsCount = kebabs.length
        }

        const pageSize = 9
        kebabs = kebabs.slice((page - 1) * pageSize, page * pageSize)

        return (
            <div className='container'>
                <div className='row space-top'>
                    <div className='col-md-12'>
                        <h1 className='jumbotron-heading text-center'>Menu</h1>
                        <form className='form-inline md-form form-sm active-cyan active-cyan-2'>
                            <i className='fa fa-search' aria-hidden='true' />
                            <input
                                className='form-control form-control-sm ml-3 w-75'
                                type='text'
                                placeholder='Search for the pizza you are looking for...'
                                aria-label='Search'
                                name='query'
                                onChange={this.onChange}
                                value={this.state.query} />
                        </form>
                    </div>
                </div>
                <KebabCards kebabs={kebabs} addOrder={addOrder}
                    isAdmin={isAdmin} isAuthenticated={isAuthenticated}
                    updateKebabsState={this.updateKebabsState} updateStatsState={this.updateStatsState} />
                <Paginator
                    kebabsCount={kebabsCount}
                    pageSize={pageSize}
                    current={page} />
            </div>
        )
    }
}

export default MenuPage

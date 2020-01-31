const e = React.createElement;

const markup = `
    <h1>Details</h1>
`;

class projectsFilter extends React.Component {
    constructor() {
        super();

        this.items = document.querySelectorAll('.project__item');
        this.state = {
            active: 'All',
            filters: ['All', 'Vanilla JS', 'Design', 'React', 'Node', 'SQL', 'Gatsby', 'GraphQL']
        }
    }

    viewProject(e) {
        document.querySelector('.projects__list').style.display = 'none';
        document.getElementById('projects__container').style.display = 'none';
        const projectDetails = document.querySelector('.project__details');
        projectDetails.style.display = 'block';
        const close = document.querySelector('.project__details-close');
        close.addEventListener('click', this.closeProject);
    }

    closeProject() {
        document.querySelector('.projects__list').style.display = 'flex';
        document.getElementById('projects__container').style.display = 'flex';
        const projectDetails = document.querySelector('.project__details');
        projectDetails.style.display = 'none';
    }

    handleDetails() {
        this.items.forEach(item => item.addEventListener('click', e => this.viewProject(e)))
    }

    handleFilters() {
        const {active} = this.state;
        this.items.forEach(item => {
            const tags = item.dataset.tag;
            if (active !== 'All' && tags.indexOf(active) === -1) {
                item.style.display = 'none'
            } else {
                item.style.display = 'block'
            }
        });
    }

    componentDidUpdate() {
        this.handleFilters();
    }

    componentDidMount() {
        this.handleDetails();
    }

    render() {
        const {active, filters} = this.state;
        return (
            <div className="projects__filter">
                {
                    filters.map((filter, i) => {
                        return (
                            <div 
                                className={`project__filter-item ${ filter === active ? 'active' : '' } link`} 
                                onClick={() => this.setState({active: filter })}
                            >
                            {filter}
                            {filter === 'All' ? ` (${this.items.length})` : ''}
                            </div>
                        )
                    })
                }
            </div>
        )   
    }
}

const projectsContainer = document.getElementById('projects__container');
ReactDOM.render(e(projectsFilter), projectsContainer);
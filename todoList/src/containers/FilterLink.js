import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispachToProps = (dispatch, ownProps) => {
    let filter = ownProps.filter
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispachToProps
)(Link)

export default FilterLink
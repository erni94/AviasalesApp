import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as filterActions from '../../store/action'

import classes from './tabs.module.scss'

const Tabs = ({ sortType, actions }) => {
  const { changeSort } = actions

  return (
    <div className={classes.tabs}>
      <div
        className={`${classes['tab-start']} ${sortType === 'lowPrice' ? classes.active : ''}`}
        onClick={() => changeSort('lowPrice')}
      >
        <p>Самый дешевый</p>
      </div>
      <div
        className={`${classes['tab']} ${sortType === 'fast' ? classes.active : ''}`}
        onClick={() => changeSort('fast')}
      >
        <p>Самый быстрый</p>
      </div>
      <div
        className={`${classes['tab-end']} ${sortType === 'optimal' ? classes.active : ''}`}
        onClick={() => changeSort('optimal')}
      >
        <p>Оптимальный</p>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { sortType: state.sortType }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(filterActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)

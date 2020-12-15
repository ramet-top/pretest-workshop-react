import React from 'react'
import DatePickerEx from '../../components/DatePickerEx'
import CustomTable from '../../components/CustomTable'
import DisableUIFromFetchApi from '../../components/DisableUIFromFetchApi'
import ComboBox from '../../components/ComboBox'

export default () => (
  <div className="has-text-centered">
    <section className="hero is-info is-medium">
      <div className="container">
        <h1 className="title">Welcome Home Page</h1>
        <h2 className="page-title">Workshop React (Top)</h2>
      </div>
    </section>

    <div className="container is-fullhd">
      <div className="notification">
        <h2>(1.1 && 1.2)Date Picker & Time Picker</h2>
        <DatePickerEx/>
        <br/>
        <br/>

        <h2>(1.3)CustomTable(sort row, group column, custom style)</h2>
        <CustomTable/>
        <br/><br/>

        <h2>(1.4)blocking ui</h2>
        <DisableUIFromFetchApi/>

        <br/><br/>
        <h2>(1.5)Autocomplete</h2>
        <ComboBox/>
      </div>
    </div>


  </div>
)

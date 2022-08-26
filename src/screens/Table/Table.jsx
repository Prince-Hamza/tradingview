import React from 'react'

export default function Table() {
    return (
        <div style={{marginBottom:'50%'}}>
            <div className="container-fluid flex-grow-1 container-p-y">
                <h4 className="font-weight-bold py-3 mb-0" style={{ color: 'white' }} > Dashboard Analytics </h4>
                <div className="text-muted small mt-0 d-block breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">
                                <i className="feather icon-home" />
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped sortable">
                                <thead>
                                    <tr>
                                        <th
                                            style={{ width: "20%", verticalAlign: "middle" }}
                                            rowSpan={2}
                                            className="az"
                                            data-defaultsign="nospan"
                                            data-defaultsort="asc"
                                        >
                                            <i className="ion ion-ios-navigate" />
                                            &nbsp; Name
                                        </th>
                                        <th colSpan={4} data-mainsort={3} style={{ textAlign: "center" }}>
                                            Results
                                        </th>
                                        <th data-defaultsort="disabled" />
                                    </tr>
                                    <tr>
                                        <th
                                            style={{ width: "20%" }}
                                            colSpan={2}
                                            data-mainsort={1}
                                            data-firstsort="desc"
                                        >
                                            Round 1
                                        </th>
                                        <th style={{ width: "20%" }}>Round 2</th>
                                        <th style={{ width: "20%" }}>Total</th>
                                        <th style={{ width: "20%" }} data-defaultsign="month">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jack Jackson</td>
                                        <td>30.51</td>
                                        <td>17.77</td>
                                        <td>14.99</td>
                                        <td>63.27</td>
                                        <td data-dateformat="DD-MM-YYYY">04-07-2013</td>
                                    </tr>
                                    <tr>
                                        <td className="sorted">Steven White</td>
                                        <td>6.21</td>
                                        <td>67.31</td>
                                        <td>84.32</td>
                                        <td>157.84</td>
                                        <td data-dateformat="DD-MM-YYYY">14-11-2016</td>
                                    </tr>
                                    <tr>
                                        <td className="sorted">Peter White</td>
                                        <td>15.53</td>
                                        <td>7.54</td>
                                        <td>37.36</td>
                                        <td>60.43</td>
                                        <td data-dateformat="DD-MM-YYYY">25-11-2012</td>
                                    </tr>
                                    <tr>
                                        <td className="sorted">Steven Spielberg</td>
                                        <td>0.25</td>
                                        <td>7.74</td>
                                        <td>15.19</td>
                                        <td>23.18</td>
                                        <td data-dateformat="DD-MM-YYYY">14-12-2001</td>
                                    </tr>
                                    <tr>
                                        <td className="sorted">Frank White</td>
                                        <td>24.81</td>
                                        <td>5.02</td>
                                        <td>18.1</td>
                                        <td>47.93</td>
                                        <td data-dateformat="DD-MM-YYYY">11.05.2016</td>
                                    </tr>
                                    <tr>
                                        <td className="sorted">Peter Jackson</td>
                                        <td>25.54</td>
                                        <td>26.32</td>
                                        <td>5.45</td>
                                        <td>57.31</td>
                                        <td data-dateformat="DD-MM-YYYY">09.04.2003</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

        </div>
    )
}

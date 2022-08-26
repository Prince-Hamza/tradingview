import React from 'react'

export default function Graph() {
  return (
    <div>
      <div className="row" style={{ marginLeft: '0px' }}>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <div id="chartist-graph" style={{ height: 250 }} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <div id="chartist-bi-polar" style={{ height: 250 }} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <div id="chartist-bars" style={{ height: 250 }} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <div id="chartist-h-bars" style={{ height: 250 }} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <div
                id="chartist-pie"
                className="ct-negative-labels"
                style={{ height: 250 }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <div id="chartist-gauge" style={{ height: 250 }} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

import React, { Component } from "react";
import {
  getAllDaysBasedInAYear,
  mergeTreeJsonWithAllDays,
  extractMonthPositionFromData
} from "./utils/calendar";
import treeDays from "./teste_arvore_data.json";
import * as R from "ramda";
import "./index.d";
import "./App.css";
import Button from "./components/Button";
import CalendarCaption from "./components/GridCalendar/CalendarCaption";
import Calendar from "./components/GridCalendar/Calendar";
import { TOTAL_WEEK_DAYS, TOTAL_MONTH_COUNT } from "./utils/defines";

type State = {
  year: number;
  days: { date: Date; count: number }[][];
  months: {
    month: string;
    position: number;
    lastMonthHelper: string;
  }[];
  totalContributions: number;
};

class App extends Component<any, State> {
  state = {
    year: 2016,
    days: [[]] as { date: Date; count: number }[][],
    months: [] as {
      month: string;
      position: number;
      lastMonthHelper: string;
    }[],
    totalContributions: 0
  };

  componentDidUpdate(prevProps: State, prevState: State) {
    if (prevState.year !== this.state.year) {
      this.magic();
    }
  }

  componentDidMount() {
    this.magic();
  }

  magic = () => {
    // get all days
    const allDays = getAllDaysBasedInAYear(this.state.year);

    // merge all days with json
    const data = mergeTreeJsonWithAllDays(allDays, treeDays);

    // get all contribuitions in this year
    const totalContributions = data.reduce((acc, { count }) => {
      return (acc += count);
    }, 0);

    // split alldays in a array of weeks
    const dataSplitted = R.splitEvery(TOTAL_WEEK_DAYS, data);

    let months = dataSplitted.reduce(extractMonthPositionFromData, []);

    // check if has more than 12 months
    if (months.length > TOTAL_MONTH_COUNT) {
      months.splice(0, months.length - TOTAL_MONTH_COUNT);
    }

    // make the magic
    this.setState({
      days: dataSplitted,
      months,
      totalContributions
    });
  };

  render() {
    const availableYears = [2019, 2018, 2017, 2016, 2015];

    return (
      <div className="App">
        <div className="flex-row">
          <div className="flex-column">
            <h2 className="header-calendar-contribuitions">
              {this.state.totalContributions} contributions
            </h2>
            <div className="container-calendar">
              <Calendar days={this.state.days} months={this.state.months} />
              <div className="footer-calendar">
                <a
                  href="https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
                  className="a"
                >
                  Learn how we count contributions
                </a>
                <CalendarCaption />
              </div>
            </div>
          </div>
          <div className="flex-column filter-button-container">
            {availableYears.map(year => (
              <Button
                key={`year-${year}`}
                data-testid={`year-${year}`}
                isActive={year === this.state.year}
                onClick={() => this.setState({ year })}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

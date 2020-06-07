import React from 'react';
import './remedialStocks.css';

class RemedialStocks extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
      return (
      <div className='remedial-stocks'>
        <p>
          “The definition of Power is not financial success, status or influence over others, but the degree to which we have control over our own lives.”

          Investing in the Stock Market is hard.  Building wealth is hard.  Respecting the quote above makes money one of the greatest sources of power their is.
          That is why taking charge of your money can be such a psychological, emotional journey.

          But in a time when the Stock Market is so accessable that highschoolers are becoming
          millionairs overnight without their parents even knowing, it is no longer reasonable to hide behind the lie
          that just because you work for a paycheck, the stock market is off limits to you.
          Plenty of world renowed companies are trading at under $100 a share and buying even just 1 share can be a small first step
          towards taking back control of your wealth.

          I'm here because my unique blend of experience in psychology, technology, and investing, enables me
          to help people who thought the stock market was some other-worldy entity not meant for them.

          No question is off limits,
          Nothing is stupid or dumb,
          No feeling is "bad" or "wrong".
          The only mistake you can make is to continue thinking you can't invest.

          It's time you took control of your wealth.

          I'm Alexander Kronfeld.  Welcome to Remidial Stocks. 

        </p>
      </div>
    );
  }
  //componentDidMount()
}

export default RemedialStocks;
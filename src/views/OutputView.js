import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';
import ERRORS from '../constants/Errors.js';

class OutputView {
  static displayLottoCount(count) {
    Console.print('');
    Console.print(MESSAGES.PURCHASE_COUNT(count));
  }

  static displayLottoNumbers(tickets) {
    tickets.forEach((ticket) => {
      Console.print('');
      Console.print(MESSAGES.LOTTO_NUMBERS(ticket.numbers));
    });
  }

  static displayResults(resultCounts) {
    Console.print('');
    Console.print(MESSAGES.WINNING_STATS);
    Console.print('---');
    Console.print(`${MESSAGES.MATCH_3}${resultCounts[3]}개`);
    Console.print(`${MESSAGES.MATCH_4}${resultCounts[4]}개`);
    Console.print(`${MESSAGES.MATCH_5}${resultCounts[5]}개`);
    Console.print(`${MESSAGES.MATCH_5_WITH_BONUS}${resultCounts['5+bonus']}개`);
    Console.print(`${MESSAGES.MATCH_6}${resultCounts[6]}개`);
  }

  static displayProfitRate(profitRate) {
    Console.print(MESSAGES.TOTAL_PROFIT_RATE(profitRate));
  }

  static displayError(errorMessage) {
    Console.print('');
    Console.print(errorMessage);
  }
}

export default OutputView;
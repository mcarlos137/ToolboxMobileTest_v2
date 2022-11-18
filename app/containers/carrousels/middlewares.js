/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
* 
* Defining middleware for reducers actions
*/

export function noAction({ dispatch }) {
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
}


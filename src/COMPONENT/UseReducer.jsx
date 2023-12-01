import React, { useReducer } from "react";

const PreviousState = {
  Amount: 100,
  isClicked: false,
};

const ReducerMethod = (State, Action) => {
  switch (Action.stage) {
    case "Increase":
      return { ...State, Amount: State.Amount + 100 };
      break;
    case "Decrease":
      return { ...State, Amount: State.Amount - 50 };
      break;
    case "Loan":
      if (State.isClicked === false) {
        return { ...State, Amount: State.Amount + 3000, isClicked: true };
      } else {
        return State;
      }
      break;
    case "PayLoan":
      if (State.Amount >= 3000 && State.isClicked === true) {
        return { ...State, Amount: State.Amount - 3000, isClicked: false };
      } else {
        return State;
      }
  }
};

const UseReducer = () => {
  const [currentState, Deposite] = useReducer(ReducerMethod, PreviousState);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">
              BALANCE{" "}
              <span className="text-secondary">{currentState.Amount}</span>
            </h1>
            <h5 className="text-center">
              ONGOING LOAN: {currentState.isClicked === true ? 1 : 0}{" "}
            </h5>
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-primary w-25 d-block mt-2">
                OPEN ACCOUNT
              </button>
              <button
                className="btn btn-primary w-25 d-block mt-2"
                onClick={() => Deposite({ stage: "Increase" })}
              >
                DEPOSIT:100
              </button>
              <button
                className="btn btn-primary w-25 d-block mt-2"
                onClick={() => Deposite({ stage: "Decrease" })}
              >
                WITHDRAW 50
              </button>
              <button
                className="btn btn-danger w-25 d-block mt-2"
                onClick={() => Deposite({ stage: "Loan" })}
              >
                REQUEST A LOAN OF 3000
              </button>
              <button
                className="btn btn-primary w-25 d-block mt-2"
                onClick={() => Deposite({ stage: "PayLoan" })}
              >
                PAY LOAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;

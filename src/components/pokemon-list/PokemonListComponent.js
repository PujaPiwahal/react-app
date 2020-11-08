import React from "react";
import { connect } from "react-redux";
import { getList } from "../../redux/action";
import "./PokemonListComponent.scss";

class PokemonListComponent extends React.Component {
  componentDidMount = () => {
    this.props.getList();
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PokemonListComponent...</h1>
        <div className="row">
          {this.props.list.results &&
            this.props.list.results.map((ob, index) => {
              return (
                <div key={index} className="column">
                  <img
                    width="150px"
                    height="150px"
                    src={`https://pokeres.bastionbot.org/images/pokemon/${
                      index + 1
                    }.png`}
                  />
                  <h2>{ob.name}</h2>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonListComponent);

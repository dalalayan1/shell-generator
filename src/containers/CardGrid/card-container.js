import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCatalogCards } from './cardContainer-actions';

import CardContainer from './CardContainer';

const mapStateToProps = ({ CardContainerPage }) => {
    return {
        cardData: CardContainerPage.cardData
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchCatalogCards
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
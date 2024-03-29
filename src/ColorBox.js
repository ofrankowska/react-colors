import React, { Component } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from "@material-ui/styles";

import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 2000)
        })
    }
    render() {
        const { name, background, colorId, paletteId, showingFullPalette, classes } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.colorBox} style={{ background }}>
                    <div
                        className={classNames(classes.copyOverlay, {
                            [classes.showOverlay]: copied
                        })}
                        style={{ background }}>
                    </div>
                    <div className={classNames(classes.copyMsg, {
                        [classes.showMsg]: copied
                    })}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>

                        <button className={classes.copyButton}>COPY</button>

                    </div>
                    {showingFullPalette && (
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
                            <span className={classes.seeMore}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);
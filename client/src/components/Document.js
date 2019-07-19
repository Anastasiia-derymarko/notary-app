import React from 'react';
import Select from 'react-select';
import {Row, Label, Placeholder, Input, colorOptions, styleSelectMenu} from '../styleComponents/styleComponents';

export default function Document(props) {
    return(
        <Row>
            {!!props.name && <Label>
                <Placeholder>Назва документа:</Placeholder>
                <Select
                    name="name"
                    value={props.name}
                    onChange={props.handleChangeInput}
                    options={props.optionsName}
                    placeholder=""
                    isSearchable={false}
                    isClearable={true}
                    theme={colorOptions}
                    styles={styleSelectMenu}
                />
            </Label>}
            {!!props.type && <Label>
                <Placeholder>Доповнення:</Placeholder>
                <Select
                    name="type"
                    value={props.type}
                    options={props.optionsType}
                    onChange={props.handleOnInputChange}
                    placeholder=""
                    isSearchable={false}
                    isClearable={true}
                    theme={colorOptions}
                    styles={styleSelectMenu}
                />
            </Label>}
            {!!props.indexNumbers && <Label flex="1" marginRight="10px">
                <Placeholder>{props.indexNumbersText}</Placeholder>
                <Input
                    type="text"
                    name="indexNumbers"
                    value={props.indexNumbers}
                    onChange={props.handleChangeInput}
                    onBlur = {props.handlerOnBlur}
                    defaultValue=""
                />
            </Label>}
            {!!props.seriesNumber && <Label flex="2">
                <Placeholder>Серія, номер</Placeholder>
                <Input
                    type="text"
                    name="seriesNumber"
                    value={props.seriesNumber}
                    onChange={props.handleChangeInput}
                    onBlur = {props.handlerOnBlur}
                    defaultValue=""
                />
            </Label>}
            {!!props.issuedOn && <Label flex="2" marginLeft="10px">
                <Placeholder>Дата видачі</Placeholder>
                <Input
                    type="date"
                    name="issuedOn"
                    value={props.issuedOn}
                    onChange={props.handleChangeInput}
                    onBlur = {props.handlerOnBlur}
                    defaultValue=""
                />
            </Label>}
            {!!props.issuedBy && <Label>
                <Placeholder>Ким виданий:</Placeholder>
                <Input
                    name = 'issuedBy'
                    value={props.issuedBy}
                    onChange={props.handleOnInputChange}
                    onBlur = {props.handlerOnBlur}
                    defaultValue=""
                />
            </Label>}
        </Row>
    )
}
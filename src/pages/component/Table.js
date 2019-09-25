import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination, Spin  } from 'antd';
// import emptyPng from '../static/image/no-data.png';
export default class TableAntd extends React.Component {
    static defaultProps = {
        className: '',
        emptyWrapperCls: '',
        wrapperCls: '',
        paginationData: {
            total: 0,
            pageSizes: [10, 20, 30, 50],
            pageSize: 10,
            currentPage: 1
        },
        paginationStyle: {},
        loading: false,
        highlightCurrentRow: false,
        onCellClickHandler: () => {},
        selectChangeHandler: () => {},
        showPagination: true,
        style: {},
        emptyDataText: '人群列表为空！'
    }
    static propTypes = {
        data: PropTypes.array.isRequired,
        columns: PropTypes.array.isRequired,
        loading: PropTypes.bool,
        className: PropTypes.string,
        emptyWrapperCls: PropTypes.string,
        wrapperCls: PropTypes.string,
        paginationData: PropTypes.object,
        selectChangeHandler: PropTypes.func,
        highlightCurrentRow: PropTypes.bool,
        showPagination: PropTypes.bool,
        style: PropTypes.object,
        paginationStyle: PropTypes.object,
        emptyDataText: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.style = {
            paginationStyle: Object.assign({
                textAlign: 'right',
                marginTop: '10px'
            }, props.paginationStyle)
        };
    }
    componentDidMount() {}
    onSelectChangeHandler(...rest) {
        return {
            onClick: () => {
                const { selectChangeHandler } = this.props;
                if (selectChangeHandler) {
                    selectChangeHandler(...rest);
                }
            },
        };
    }
    onCurrentChangeHandler(...rest) {
        const { selectChangeHandler } = this.props;
        if (selectChangeHandler) {
            selectChangeHandler(...rest);
        }
    }
    // setRowClassName(...rest) {
    //     const { setRowClassName } = this.props;
    //     let className = '';
    //     if (setRowClassName) {
    //         className = setRowClassName(...rest);
    //     }
    //     return className;
    // }
    onSortChangeHandler(...rest) {
        const { onSortChange } = this.props;
        if (onSortChange) {
            onSortChange(...rest);
        }
    }
    render() {
        const {
            data, loading, columns, className, emptyWrapperCls, wrapperCls, paginationData,
            highlightCurrentRow, showPagination, style, emptyDataText, maxHeight, scroll, self
        } = this.props;
        const rowSelection = {
            onSelect: this.onSelectChangeHandler
        };
        const emptyStyle = {
            display: data.length ? 'none' : 'block'
        };
        const { paginationStyle } = this.style;
        return (
            <div className={wrapperCls} style={style}>
                <Spin tip="加载中..." spinning={loading}>
                    {
                        (!loading && !data.length) ?
                            <div className={emptyWrapperCls} style={emptyStyle}>
                                <div className="content">
                                    {/* <img src={emptyPng} alt={emptyDataText} /> */}
                                </div>
                                <div>
                                    <span className="first-text">{emptyDataText}</span>
                                </div>
                            </div> :
                            [<Table
                                scroll={{ x: scroll}} 
                                pagination={false}
                                style={{ width: '100%' }}
                                columns={columns}
                                dataSource={data}
                                maxHeight={maxHeight}
                                className={className}
                                highlightCurrentRow={highlightCurrentRow}
                                // onRow={this.onSelectChangeHandler.bind()}
                                onCurrentChange={this.onCurrentChangeHandler}
                                onSortChange={this.onSortChangeHandler}
                                // rowClassName={this.setRowClassName}
                                // key={uuid.v1()}
                            />,
                            <Pagination
                                // disabled={showPagination}
                                defaultCurrent={paginationData.currentPage}
                                pageSizeOptions={paginationData.pageSizes}
                                pageSize={paginationData.pageSize}
                                total={paginationData.total}
                                onChange={(page, pagasize,) => paginationData.currentChangeHandler(page, pagasize, self)}
                                onShowSizeChange={paginationData.sizeChangeHandler}
                            />
                        ]
                    }
                </Spin>
            </div>
        );
    }
}
import { useEffect, useState } from 'react';
import { useRequest } from './useRequest';

export const usePaginationRequest = (
  service: Function,
  countService: Function,
  optionsParams: any,
  urlParams?: string,
  onChange?: any,
  location?: any,
) => {
  const [params, setParams] = useState(optionsParams);

  const [pagination, setPagination] = useState({
    current: parseInt((location && location.query.current) || 1),
    pageSize: parseInt((location && location.query.pageSize) || 10),
  });

  const [sorter, setSorter] = useState({
    sortField: location && location.query.sortField,
    sortOrder: location && location.query.sortOrder,
  });
  const { data = [], loading, run } = useRequest(service, {
    // onSuccess:()=>{
    // }
  });

  const countRequest = useRequest(countService, {
    // onSuccess:()=>{
    // }
  });

  useEffect(() => {
    if (onChange) {
      onChange({
        pagination,
        sorter,
        params,
      });
    }

    // console.log({
    //   params,
    //   sorter,
    //   skip: (pagination.current - 1) * pagination.pageSize,
    //   take: pagination.pageSize,
    // });
    if (urlParams !== undefined) {
      run(urlParams, {
        ...params,
        ...sorter,
        skip: (pagination.current - 1) * pagination.pageSize,
        take: pagination.pageSize,
      });
    } else {
      run({
        ...params,
        ...sorter,
        skip: (pagination.current - 1) * pagination.pageSize,
        take: pagination.pageSize,
      });
    }
  }, [sorter, pagination]);

  useEffect(() => {
    setPagination({
      current: 1,
      pageSize: pagination.pageSize,
    });
  }, [params]);

  useEffect(() => {
    if (urlParams !== undefined) {
      countRequest.run(urlParams, params);
    } else {
      countRequest.run(params);
    }
  }, [params]);

  const handleChange = (
    tablePagination: any,
    tableFilters: any,
    tableSorter: any,
  ) => {
    // console.log({tablePagination, tableFilters, tableSorter});
    // setParams({...params, ...tableFilters});
    setSorter({
      sortOrder: tableSorter.order === 'ascend' ? 'asc' : 'desc',
      sortField: tableSorter.field,
    });
    setPagination({
      current: tablePagination.current,
      pageSize: tablePagination.pageSize,
    });
  };

  const handleCurrentChange = (tableCurrent: number) => {
    setPagination({
      current: tableCurrent,
      pageSize: pagination.pageSize,
    });
  };

  const handlePageSizeChange = (a: any, pageSize: number) => {
    setPagination({ current: 1, pageSize });
  };

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    total: countRequest.data || 0,
    current: pagination.current,
    loading: countRequest.loading,
    onChange: handleCurrentChange,
    pageSize: pagination.pageSize,
    onShowSizeChange: handlePageSizeChange,
  };

  //console.log({data, ...params, ...sorter, ...pagination});
  return {
    data,
    loading,
    params,
    handleChange,
    setParams,
    refresh: () => {
      if (urlParams !== undefined) {
        run(urlParams, {
          ...params,
          ...sorter,
          skip: (pagination.current - 1) * pagination.pageSize,
          take: pagination.pageSize,
        });
      } else {
        run({
          ...params,
          ...sorter,
          skip: (pagination.current - 1) * pagination.pageSize,
          take: pagination.pageSize,
        });
      }
    },

    tableProps: {
      onChange: handleChange,
      dataSource: data || [],
      loading,
      pagination: paginationProps,
    },
  };
};

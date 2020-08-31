import { request } from './index';

export function getToDoList() {
  return request({
    method: 'get',
    url: '',
  });
}

export function deleteItem(_id) {
  return request({
    method: 'delete',
    url: `${_id}`,
  });
}

export function doneItem(data) {
  return request({
    method: 'put',
    url: ``,
    data: data,
  });
}

export function addItem(data) {
  return request({
    method: 'post',
    url: ``,
    data: data,
  });
}

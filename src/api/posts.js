import axios from 'axios';
const baseUrl = 'http://localhost:5000';
/**
 * post 데이터 목록 출력
 * @returns post 목록
 */
export function getPostList() {
	return axios.get(`${baseUrl}/posts`);
}

/**
 * ID에 해당하는 post 데이터 출력
 * @param {String} id post의 id
 * @returns post 데이터
 */
export function getPostById(id) {
	return axios.get(`${baseUrl}/posts/${id}`);
}

/**
 * post 생성
 * @param {Object} data 생성 post 데이터
 */
export function createPost(data) {
	return axios.post(`${baseUrl}/posts`, data);
}

/**
 * post 수정
 * @param {String} id post의 id
 * @param {Object} data 수정 post 데이터
 */
export function updatePost(id, data) {
	return axios.put(`${baseUrl}/posts/${id}`, data);
}

/**
 * post 단일 삭제
 * @param {String} id post의 id
 */
export function deletePost(id) {
	return axios.delete(`${baseUrl}/posts/${id}`);
}

import axios from 'axios';
const posts = [
	{ id: 1, title: 'title1', content: 'content1', createdAt: '2025-01-01' },
	{ id: 2, title: 'title2', content: 'content2', createdAt: '2025-01-02' },
	{ id: 3, title: 'title3', content: 'content3', createdAt: '2025-01-03' },
	{ id: 4, title: 'title4', content: 'content4', createdAt: '2025-01-04' },
	{ id: 5, title: 'title5', content: 'content5', createdAt: '2025-01-05' },
];

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

export function createPost(data) {
	return axios.post(`${baseUrl}/posts`, data);
}

export function updatePost(id, data) {
	return axios.put(`${baseUrl}/posts/${id}`, data);
}
export function deletePost(id) {
	return axios.delete(`${baseUrl}/posts/${id}`);
}

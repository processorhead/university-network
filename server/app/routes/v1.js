var express = require('express');
var app = express.Router();
var controllers = require('../controllers');
var auth = require('../../lib/auth');

app.get('/api/v1/actions', controllers.actions.index);

app.get('/api/v1/articles', controllers.articles.index);
app.post('/api/v1/articles', controllers.articles.create);

app.get('/api/v1/disciplines', controllers.disciplines.index);
app.post('/api/v1/disciplines', controllers.disciplines.create);
app.get('/api/v1/groups/:id/disciplines', controllers.disciplines.schedule);

app.get('/api/v1/groups', controllers.groups.index);
app.post('/api/v1/groups', controllers.groups.create);

app.get('/api/v1/log_events', controllers.log_events.index);

app.get('/api/v1/materials', controllers.materials.index);
app.post('/api/v1/materials', controllers.materials.create);

app.get('/api/v1/messages', controllers.messages.index);
app.post('/api/v1/messages', controllers.messages.create);

app.get('/api/v1/student_answers', controllers.student_answers.index);

app.get('/api/v1/students', controllers.students.index);
app.post('/api/v1/students', controllers.students.create);
app.get('/api/v1/groups/:group_id/students', controllers.groups.students.index);

app.get('/api/v1/taught_disciplines', controllers.taught_disciplines.index);
app.post('/api/v1/taught_disciplines', controllers.taught_disciplines.create);

app.get('/api/v1/teachers', controllers.teachers.index);
app.post('/api/v1/teachers', controllers.teachers.create);

app.get('/api/v1/tests', controllers.tests.index);

app.get('/api/v1/test_questions', controllers.test_questions.index);

app.get('/api/v1/users', auth, controllers.users.index);
app.post('/api/v1/users', controllers.users.create);

app.post('/api/v1/sessions', controllers.sessions.create);

module.exports = app;

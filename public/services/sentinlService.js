/* global angular */
import _ from 'lodash';
import { app } from '../app.module';

app.service('sentinlService', ['$http', function ($http) {

  // update timepicker filter
  this.updateFilter = function (timeInterval) {
    return $http.get('../api/sentinl/set/interval/' + angular.toJson(timeInterval).replace(/\//g, '%2F'));
  };

  this.listAlarms = function () {
    return $http.get('../api/sentinl/list/alarms');
  };

  this.listReports = function () {
    return $http.get('../api/sentinl/list/reports');
  };

  this.listWatchers = function () {
    return $http.get('../api/sentinl/list');
  };

  this.deleteAlarm = function (index, type, id) {
    return $http.delete(`../api/sentinl/alarm/${index}/${type}/${id}`);
  };

  this.getWatcher = function (id) {
    return $http.get(`../api/sentinl/get/watcher/${id}`);
  };

  this.saveWatcher = function (watcher) {
    return $http.post(`../api/sentinl/watcher/${watcher._id}`, watcher);
  };

  this.deleteWatcher = function (id) {
    return $http.delete(`../api/sentinl/watcher/${id}`);
  };

  this.listScripts = function (field) {
    return $http.get(`../api/sentinl/get/scripts/${field}`);
  };

  this.saveScript = function (type, id, doc) {
    return $http.post(`../api/sentinl/save/one_script/${type}/${id}`, doc);
  };

  this.deleteScript = function (type, id) {
    return $http.delete(`../api/sentinl/remove/one_script/${type}/${id}`);
  };

  this.getAuthInfo = function () {
    return $http.get('../api/sentinl/config/auth_info');
  };

  this.addUser = function (watcherId, username, password) {
    return $http.post(`../api/sentinl/user/${watcherId}/${username}/${password}`);
  };

}]);

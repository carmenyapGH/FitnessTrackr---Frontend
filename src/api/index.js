export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export const fetchRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await response.json();
<<<<<<< HEAD
    console.log("fetchRoutine_info =>", info);
    return info;
  } catch (error) {
    console.error(error);
=======
    return info;
  } catch (error) {
    console.error(`Error retrieving routines ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const fetchMyRoutines = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await response.json();
<<<<<<< HEAD
    console.log("fetchMyRoutine_info =>", info);
    return info;
  } catch (error) {
    console.error(error);
=======
    return info;
  } catch (error) {
    console.error(`Error retrieving my routines ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const fetchActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await response.json();
<<<<<<< HEAD
    console.log("fetchActivities_info =>", info);
    return info;
  } catch (error) {
    console.error(`Error retrieving activities ${error}`);
    // throw error;
=======
    return info;
  } catch (error) {
    console.error(`Error retrieving activities ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const fetchActivitiesId = async (activityId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/activities/${activityId}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const info = await response.json();

    return info;
  } catch (error) {
<<<<<<< HEAD
    console.error(error);
=======
    console.error(`Error fetching routine Id ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const addActivities = async (name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const info = await response.json();
<<<<<<< HEAD
    console.log("addActivities_info =>", data);
    return info;
  } catch (error) {
    console.error(error);
  }
};

export const AddRoutines = async (localSourcedToken, name, goal, isPublic) => {
=======
    return info;
  } catch (error) {
    console.error(`Error adding an activity ${error}`);
  }
};

export const addRoutines = async (localSourcedToken, name, goal, isPublic) => {
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localSourcedToken}`,
      },

      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
    const info = await response.json();
<<<<<<< HEAD
    console.log("addRoutines_info =>", info);
    return info;
  } catch (error) {
    console.error(error);
=======
    return info;
  } catch (error) {
    console.error(`Error adding routines ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const addRoutineActivities = async (
<<<<<<< HEAD
  routineId,
  activityId,
=======
  localSourcedToken,
  routineId,
  activity,
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  count,
  duration
) => {
  try {
    const response = await fetch(
<<<<<<< HEAD
      `${BASE_URL}/routines${routineId}/activities`,
      {
        method: "POST",
        body: JSON.stringify({
          activityId: activityId,
=======
      `${BASE_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localSourcedToken}`,
        },
        body: JSON.stringify({
          activityId: activity,
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
          count: count,
          duration: duration,
        }),
      }
    );
    const info = await response.json();
<<<<<<< HEAD

    return info;
  } catch (error) {
    console.error(error);
  }
};

export const updateRoutines = async (name, goal, isPublic, routineId) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        goal: goal,
      }),
    });
    const info = await response.json();
    console.log("addRoutines_info =>", info);
    return info;
  } catch (err) {
    console.log(err);
=======
    return info;
  } catch (error) {
    console.error(`Error retrieving routine Id ${error}`);
  }
};

export const updateRoutines = async (
  localSourcedToken,
  name,
  goal,
  isPublic,
  routineId
) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localSourcedToken}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
    const info = await response.json();
    return info;
  } catch (error) {
    console.error(`Error updating routines ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const updateActivities = async (name, description, activityId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${activityId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const info = await response.json();

    return info;
<<<<<<< HEAD
  } catch (err) {
    console.log(err);
  }
};

export const updateRoutineActivities = async (routineId, count, duration) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/routine_activities/${activityId}`,
      {
        method: "PATCH",
=======
  } catch (error) {
    console.error(`Error updating activities ${error}`);
  }
};

export const updateRoutineActivities = async (
  localSourcedToken,
  routineActivityId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localSourcedToken}`,
        },
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
        body: JSON.stringify({
          count: count,
          duration: duration,
        }),
      }
    );
    const info = await response.json();
<<<<<<< HEAD

    return info;
  } catch (err) {
    console.log(err);
  }
};

export const deleteRoutinesActivities = async (routineActivityId, token) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routine_id}`,
=======
    return info;
  } catch (error) {
    console.error(`Error updating routine activity ${error}`);
  }
};

export const deleteRoutineActivities = async (token, routineActivityId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const info = await response.json();

    return info;
<<<<<<< HEAD
  } catch (err) {
    console.log(err);
=======
  } catch (error) {
    console.error(`Error deleting a routine activity ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const deleteRoutines = async (routine_id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routine_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await response.json();

    return info;
<<<<<<< HEAD
  } catch (err) {
    console.log(err);
=======
  } catch (error) {
    console.error(`Error deleting a routine ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const info = await response.json();
    return info;
  } catch (error) {
<<<<<<< HEAD
    console.error(error);
=======
    console.error(`Error loging in a user ${error}`);
>>>>>>> f758b976874bd200cd2cfd3f258303f367212854
  }
};

export const register = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const info = await response.json();

    return info;
  } catch (error) {
    console.error(`Error registering a user ${error}`);
  }
};

export const userInfo = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await response.json();

    return info;
  } catch (error) {
    console.error(`Error retrieving user information ${error}`);
    // throw error;
  }
};

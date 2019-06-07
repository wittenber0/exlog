module.exports = {
    GET_LIFT_WORKOUTS_BY_ID:
        'select * from all_lift_sets\
        inner join completed_lifts on all_lift_sets.completed_lift_id = completed_lifts.completed_lift_id\
        inner join lift_types on completed_lifts.lift_type_id = lift_types.id\
        inner join lift_workouts on completed_lifts.lift_workout_id = lift_workouts.lift_workout_id'
};


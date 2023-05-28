import { Card, Col, Button } from 'antd';
function FoodBox({food, deleteHandler}) {
    const {foodname, image, calories, servings} = food
    return (
      <Col>
        <Card
          title={'FOOD_NAME_HERE'}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={'FOOD_IMAGE_HERE'} height={60} alt="food" />
          <p>Calories: FOOD_CALORIES_HERE</p>
          <p>Servings: FOOD_SERVINGS_HERE</p>
          <p>
            <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }

  export default FoodBox;
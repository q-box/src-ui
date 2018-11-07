import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Card, Icon } from 'antd';
const { Meta } = Card;

class Cartao extends Component {
  renderCard = (text) => {
    return (
      <Card
        style={{width:400,borderRadius:'10px 0px 0px 0px',backgroundColor:'#ffd03e'}}
        
        cover={<div><div style={{height:20,borderRadius:'10px 0px 0px 0px'}}></div><img alt="imagem" style={{width:'100%'}} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" /></div>}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
        <Meta
          // avatar={
          //   <Avatar>
          //       <Icon type={!done?"close":"check" } style={!done?{color:"#d9534f"}:{color:"#5cb85c"}} theme="outlined" />
          //   </Avatar>
          // }
          description={text}
        />
      </Card>
    );
  }

  cardStyle = () =>{
    return{
      borderRadius:'10px 0px px 100px',
      width:300
    }
  }
  render()  {
      return (
        <div>
          {this.renderCard(
            this.props.text
          )}

        </div>
      );
    }
}

/*class ExamCard extends Component {
    renderHeader = (done, title, subtitle) => {
      return (
        <CardHeader
          avatar={
            <Avatar>
              <DoneIcon color={done ? "primary" : "disabled"} />
            </Avatar>
          }
          title={title}
          subheader={subtitle}
        />
      );
    };
  
    renderMedia = (media, title) => {
      const images = require.context("../images", true);
      const image = images(`./${media}`);
      return (
        <CardMedia
          alt={title}
          component="img"
          height="140"
          image={image}
          title={title}
        />
      );
    };
  
    renderSupportingText = text => {
      return (
        <CardContent>
          <Typography component="p">{text}</Typography>
        </CardContent>
      );
    };
  
    renderButtons = done => {
      return (
        <CardActions>
          <Button size="small" color="primary">
            {done ? "Responder novamente" : "Responder"}
          </Button>
          <Button size="small" color="secondary">
            Outra ação :D
          </Button>
          <IconButton>
            <UnkownIcon />
          </IconButton>
        </CardActions>
      );
    };
  
    render() {
      return (
        <Card>
          {this.renderHeader(
            this.props.done,
            this.props.title,
            this.props.subtitle
          )}
          {this.renderMedia(this.props.media, this.props.title)}
          {this.renderSupportingText(this.props.text)}
          <Divider />
          {this.renderButtons(this.props.done)}
        </Card>
      );
    }
  }
  */

export default Cartao;
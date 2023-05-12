import React from 'react'
import {Page,Text,Image,Document,StyleSheet} from "@react-pdf/renderer";
import { ViewHistory } from './ViewHistory';
import { Box, CardBody, Center, Divider, Stack,Card,CardFooter,Button,Link,ButtonGroup } from '@chakra-ui/react';
import { useSelector } from 'react-redux';


const styles = StyleSheet.create({
    body:{
        paddingTop:35,
        paddingBottom:65,
        paddingHorizontal:35,
    },
    header : {
        fontSize:12,
        marginBottom : 20,
        textAlign : "center",
        color : "grey",
    },
    pageNumber : {
        position:"absolute",
        fontSize : 12,
        bottom:30,
        left : 0,
        right:0,
        textAlign:"center",
        color:"grey"
    }
})

export const Recept = () => {
    // const data = useSelector((store)=>{
    //     console.log(store.doctorGetReducer.viewHistory)
    //     return store.doctorGetReducer.viewHistory
    // })
    // console.log("data :", data)
    // const data = useSelector((store)=>{
    //     console.log(store.doctorGetReducer.viewHistory)
    //     return store.doctorGetReducer.viewHistory
    // })

  return (
    <Document>
        <Page style={styles.body}>
            {/* <Text>
                Hello I am sakshi
            </Text>
            <Text
            style={styles.pageNumber}
            render={({pageNumber,totalPages})=>'${pageNumber}/${totalPages}'}
            fixed
            /> */}
        </Page>
    </Document>
  )
}

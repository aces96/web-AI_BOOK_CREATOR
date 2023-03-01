import { Box, Typography } from "@mui/material"
import AIWriter from '../assets/images/AIWRITER.png'
import { PricingSection } from "../components/pricing.components"





export const Pricing = ()=>{

    return (
        <Box sx={{width: '100%', height: '100vh', background: `url(${AIWriter})`}}>
            <Box sx={{width: '50%', margin: 'auto', marginBottom: 10}}>
                <Typography textAlign={'center'} color={'white'} variant={'h2'}>
                    <b>Get started with AI Book Creator!</b>
                </Typography>
                <Typography textAlign={'center'} color={'white'} variant={'body2'}>
                    Welcome to our AI Book Creator, powered by GPT-3. Our user-friendly platform offers powerful features to help you generate high-quality content for your writing projects. Choose from a variety of subscription plans to access essential writing tools and advanced features, including personalized writing prompts and in-depth language analysis. Write with ease and efficiency with our innovative writing tool.
                </Typography>
            </Box>
            <Box sx={{width: '90%', margin: 'auto'}}>
                <PricingSection />
            </Box>
        </Box>
    )
}
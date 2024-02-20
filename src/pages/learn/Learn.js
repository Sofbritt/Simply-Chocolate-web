import React from "react";
import './Learn.css';
import ItemProps from "../../components/props/item-props/ItemProps";
import SpanProps from "../../components/props/span-props/SpanProps";
import GiftGuide from "../../components/props/gift-guide/GiftGuide";


function Learn() {
    return (
        <div>
          <GiftGuide 
          GuideImg='https://simplychocolatecph.com/cdn/shop/files/FB_kvadrat_mix_2024_7.png?v=1707381311&width=500'
          OnImgPicture='https://simplychocolatecph.com/cdn/shop/files/36.png?v=1707317909&width=500'
          title='Årets forårskollektion'
    
          GuideSpan= 'Vores dygtige chocolatiers har sammensat en forårskollektion bestående af fortryllende bites til påskebordet og en række smagfyldte gaveæsker fyldt med premium chokolade. Pynt et magisk påskebord med de farverige bites, eller forkæl værtinden, din familie, dine kollegaer eller dig selv med håndlavet påskechokolade produceret med de bedste naturlige ingredienser💛.
          Rigtig god fornøjelse.   
    '
          />

            <SpanProps
                FirstSpan='Go to page'
                MainTitle='Premium Chocolate'
            />

            <div className="item-div">
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_bar_wBite_1000_c8b318b4-f5bb-45d8-9953-512ce7903ef1.png?v=1702047398&width=500'
                    ingridients='Mix chocolate bestsellers'
                    itemName='Premium Heartbox-Exclusive gift box with 40 bites'
                    price='349.00 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Premium50_1_m.skygge_1000x1000_6e1ef282-1005-4a1f-a956-6c8f58373be9.png?v=1702036673&width=500'
                    itemName='Yes you can buy love-Gift box with 3 box'
                    ingridients='Dark Marcy,Grainy Billy'
                    price='249.00 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=500'
                    ingridients='Crispy Carry,Dark Marci'
                    itemName='Instead of flowers-Gift box 2 cubes'
                    price='169.00 amd'
                />

            </div>

            <div className="item-div">
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/HeavenEggxist_sq_duocombo_open_wBites_alt_1000.png?v=1707905236&width=500'
                    ingridients='Mix chocolate bestsellers'
                    itemName='Premium Heartbox-Exclusive gift box with 40 bites'
                    price='349.00 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/SharingIsCaring_sq_duocombo_open_wBites_alt_1000.png?v=1707905303&width=500'
                    itemName='Yes you can buy love-Gift box with 3 box'
                    ingridients='Dark Marcy,Grainy Billy'
                    price='249.00 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/FreshFromTheFarm_sq_duocombo_open_wBites_alt_1000.png?v=1707905191&width=500'
                    ingridients='Crispy Carry,Dark Marci'
                    itemName='Instead of flowers-Gift box 2 cubes'
                    price='169.00 amd'
                />

            </div>

            <div className="item-div">
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_12_EnjoyTheLastSupper.png?v=1683205486&width=500'
                    ingridients='Mix chocolate bestsellers'
                    itemName='Premium Heartbox-Exclusive gift box with 40 bites'
                    price='349.00 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_12_FreshFromTheFarm.png?v=1683205526&width=500'
                    itemName='Yes you can buy love-Gift box with 3 box'
                    ingridients='Dark Marcy,Grainy Billy'
                    price='249.00 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_24_SinnersChoice.png?v=1683205717&width=500'
                    ingridients='Crispy Carry,Dark Marci'
                    itemName='Instead of flowers-Gift box 2 cubes'
                    price='169.00 amd'
                />

            </div>

            <div className="item-div">
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/CreamyCarol_sq_cube_dancing_wBite_wChoco_1000.png?v=1700755714&width=500'
                    ingridients='Mix chocolate bestsellers'
                    itemName='Premium Heartbox-Exclusive gift box with 40 bites'
                    price='349.00 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_cube_dancing_wBite_wChoco_1000.png?v=1700827052&width=5000'
                    itemName='Yes you can buy love-Gift box with 3 box'
                    ingridients='Dark Marcy,Grainy Billy'
                    price='249.00 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/GrainySue_sq_cube_dancing_wBite_wChoco_1000.png?v=1700826999&width=500'
                    ingridients='Crispy Carry,Dark Marci'
                    itemName='Instead of flowers-Gift box 2 cubes'
                    price='169.00 amd'
                />

            </div>


        </div>
    )
}

export default Learn;
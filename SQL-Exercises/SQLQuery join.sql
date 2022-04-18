--SELECT * FROM emp_department
--SET ANSI_NULLS ON
--GO



--SET QUOTED_IDENTIFIER ON
--GO



--CREATE TABLE [dbo].[orders](
--[ord_no] [int] NOT NULL,
--[purch_amt] [decimal](6, 2) NULL,
--[ord_date] [date] NOT NULL,
--[CustomerId] [int] NULL,
--[salesman_id] [int] NULL,
--PRIMARY KEY CLUSTERED
--(
--[ord_no] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
--) ON [PRIMARY]
--GO



--ALTER TABLE [dbo].[orders] WITH CHECK ADD FOREIGN KEY([CustomerId])
--REFERENCES [dbo].[Customer] ([CustomerId])
--GO



--ALTER TABLE [dbo].[orders] WITH CHECK ADD FOREIGN KEY([salesman_id])
--REFERENCES [dbo].[salesman] ([salesman_ID])
--GO


--SET ANSI_NULLS ON
--GO



--SET QUOTED_IDENTIFIER ON
--GO



--CREATE TABLE [dbo].[salesman](
--[salesman_ID] [int] NOT NULL,
--[NAME] [varchar](43) NULL,
--[city] [char](37) NULL,
--[commission] [decimal](2, 2) NULL,
--PRIMARY KEY CLUSTERED
--(
--[salesman_ID] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
--) ON [PRIMARY]
--GO





select * from RecordLabel
select * from Artists
select * from Song
select * from Albums
select * from Track

select ar.Name,rl.Name from Artists ar join RecordLabel rl on ar.LabelId=rl.LabelID

select * from Artists
select * from Song
select * from Albums

select ar.Name, rl.Name,sg.Duration from Artists ar join Albums rl  on ar.ArtistsId=rl.ArtistsId join Song sg on sg.AlbumsId=rl.AlbumsId 

select * from Artists
select * from Albums

select ar.Name,al.Name from Artists ar join Albums al on ar.ArtistsId=al.ArtistsId


Select * from Invoice
Select * from Albums
 